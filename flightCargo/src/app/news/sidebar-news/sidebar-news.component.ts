import { Component, OnInit } from '@angular/core';
import { NewsRecord } from '../../../types/NewsRecord';
import { NewsService } from '../news.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-news.component.html',
  styleUrl: './sidebar-news.component.css'
})
export class SidebarNewsComponent implements OnInit{

  news:NewsRecord[] = [];
  
  constructor(private newsService:NewsService)
  {

  }

  ngOnInit(): void {
    this.newsService.getNews(5).subscribe((newsList) => {this.news=newsList; console.log(newsList)});
  }

  
}
