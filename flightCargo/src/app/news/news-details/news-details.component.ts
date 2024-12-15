import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsRecord } from '../../../types/NewsRecord';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent implements AfterContentChecked {

  newsRecord:NewsRecord|null = null;
   constructor(private newsService:NewsService, private activatedRoute:ActivatedRoute){}
  
   ngAfterContentChecked():void
   {
    const id = this.activatedRoute?.snapshot?.params['id'];
    this.newsService.getNewsRecord(id).subscribe((theRecord)=>this.newsRecord=theRecord);
   }

}
