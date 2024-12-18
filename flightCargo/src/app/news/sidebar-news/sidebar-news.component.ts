import { AfterContentChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
export class SidebarNewsComponent implements OnInit, OnDestroy{

  @Input('') news:NewsRecord[] = [];
  
  constructor(private newsService:NewsService)
  {

  }

  ngOnInit(): void 
  {
    console.log("Sidebar OnInit");
    this.newsService.limitedNews$$.subscribe((newsList) => {console.log("SideBarNews sub ran"); this.news=newsList!});
    this.newsService.getLastNews(5).subscribe((records)=>{this.news=records;});
  }

  ngOnDestroy(): void {
    //this.newsService.limitedNews$$.unsubscribe();
  }
  
}