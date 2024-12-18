import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsRecord } from '../../../types/NewsRecord';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent implements OnInit, AfterContentChecked {

  newsRecord:NewsRecord|null = null;
  newsId:string|null = null;
   constructor(private newsService:NewsService, private userService:UserService, private activatedRoute:ActivatedRoute){}
  
   ngOnInit():void
   {
    const id = this.activatedRoute?.snapshot?.params['id'];
    this.newsId = id;
    this.newsService.getNewsRecord(id).subscribe((theRecord)=>this.newsRecord=theRecord);
   }

   get isUserAdmin():boolean
   {
    return this.userService.isUserAdmin;
   }

   ngAfterContentChecked(): void {
    const id = this.activatedRoute?.snapshot?.params['id'];
    if (this.newsId != id)
    {
      this.newsService.getNewsRecord(id).subscribe((theRecord)=>this.newsRecord=theRecord);
      this.newsId = id;
    }
   }

}
