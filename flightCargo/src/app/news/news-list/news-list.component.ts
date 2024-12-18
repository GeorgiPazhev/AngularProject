import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NewsRecord } from '../../../types/NewsRecord';
import { NewsService } from '../news.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit, AfterContentChecked{


  @Input('') news:NewsRecord[] = [];
  reload:Boolean = false;
  constructor(private newsService:NewsService, private userService:UserService, private router:Router, private det:ChangeDetectorRef){}

  ngOnInit(): void {
    this.getAllNews();
  }


  get isUserAdmin():boolean
  {
    return this.userService.isUserAdmin;
  }

  removeNewsRecord(id: string)
  {
    this.reload = true;
    this.newsService.removeNewsRecord(id).subscribe(()=> {
      this.reload = true;
    });

  }

  getAllNews():void
  {
    this.newsService.getNews().subscribe((records)=>{this.news = records;});
  }

  ngAfterContentChecked(): void {
    if(this.reload)
    {
      this.getAllNews();
      this.reload = false;
    }
  }

}
