import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsRecord } from '../../../types/NewsRecord';
import { NewsService } from '../news.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements AfterContentChecked{


  news:NewsRecord[] = [];

  constructor(private newsService:NewsService, private userService:UserService){}

  ngAfterContentChecked(): void {
    this.getAllNews();
  }


  getAllNews():void
  {
    this.newsService.getNews(null).subscribe((newsList) => this.news=newsList);
  }

  get isUserAdmin():boolean
  {
    return this.userService.isUserAdmin;
  }

  removeNewsRecord(id: string)
  {
    this.newsService.removeNewsRecord(id).subscribe(()=>{this.getAllNews()});
  }


}
