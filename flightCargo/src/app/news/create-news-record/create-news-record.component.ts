import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news-record',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-news-record.component.html',
  styleUrl: './create-news-record.component.css'
})
export class CreateNewsRecordComponent {

  form = new FormGroup({
    caption: new FormControl('', [Validators.required,]),
    abstract: new FormControl('', [Validators.required,]),
    content: new FormControl('', [Validators.required, ]),
  });
 
  constructor(private newsService:NewsService, private router:Router){ }

  createNewsRecord() 
  {
    if (this.form.invalid)
    {
      return;
    }

    const {caption, abstract, content} = this.form.value;

    if (caption != null && abstract != null && content != null)
    {
        this.newsService.createNewsRecord(caption, abstract, content).subscribe(() => this.router.navigate(["/news"]));
    }

  }

}
