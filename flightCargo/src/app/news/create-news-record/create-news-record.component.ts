import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsRecord, NewsRecordForUpdate } from '../../../types/NewsRecord';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-news-record',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-news-record.component.html',
  styleUrl: './create-news-record.component.css'
})
export class CreateNewsRecordComponent implements OnInit{

  form = new FormGroup({
    caption: new FormControl('', [Validators.required,]),
    abstract: new FormControl('', [Validators.required,]),
    content: new FormControl('', [Validators.required, ]),
  });

  newsRecocordId:string|null = null;
 
  constructor(private newsService:NewsService, private router:Router, private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void 
  {
    this.newsRecocordId = this.activatedRoute.snapshot.params['id'];
    console.log(this.newsRecocordId);
    if(this.newsRecocordId != null)
    {
      this.newsService.getNewsRecordForUpdate(this.newsRecocordId).subscribe((theRecord) => {const {caption, abstract, content} = theRecord; this.form.setValue({caption, abstract, content})});
    }
  }

  createNewsRecord() 
  {
    if (this.form.invalid)
    {
      return;
    }

    const {caption, abstract, content} = this.form.value;
    
    if (caption != null && abstract != null && content != null)
    {
        if(this.newsRecocordId != null)
        {
          this.newsService.updateNewsRecord(this.newsRecocordId, caption, abstract, content).subscribe(()=> {
            //this.newsService.getNews(5).pipe(tap((records)=>this.newsService.limitedNews$$.next(records))).subscribe(()=>{});
            this.router.navigate(["/news", "details", this.newsRecocordId]);});
        }
        else
        {
            this.newsService.createNewsRecord(caption, abstract, content).subscribe(() => {
              //this.newsService.getNews(5).pipe(tap((records)=>this.newsService.limitedNews$$.next(records))).subscribe(()=>{});
              this.router.navigate(["/news"]);
            });
        }
    }

  }

}
