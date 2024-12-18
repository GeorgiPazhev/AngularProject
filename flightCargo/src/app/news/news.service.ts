import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRecord, NewsRecordForUpdate } from '../../types/NewsRecord';
import { BehaviorSubject, Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public limitedNews$$ = new BehaviorSubject<NewsRecord[]|null>(null);
  public limitedNews$ = this.limitedNews$$.asObservable();
  

  constructor(private httpClient:HttpClient, private router: Router) 
  {   
      
  }
  

  getLastNews(limit:Number)
  {
    let url:string = `/api/news/${limit}`;
    
    return this.httpClient.get<NewsRecord[]>(url).pipe(tap((records)=>this.limitedNews$$.next(records)));
  }

  getNews()
  {
    return this.httpClient.get<NewsRecord[]>("/api/news");
  }

  createNewsRecord(caption:string, abstract: string, content:string)
  {
    return this.httpClient.post<NewsRecord>("/api/news", {caption, abstract, content})
                          .pipe(tap(()=>this.getLastNews(5).subscribe(()=>{})));
  }

  getNewsRecord(id:string)
  {
      return this.httpClient.get<NewsRecord>(`/api/news/details/${id}`);
  }

  getNewsRecordForUpdate(id:string)
  {
      return this.httpClient.get<NewsRecordForUpdate>(`/api/news/details/${id}`);
  }

  updateNewsRecord(id:string, caption:string, abstract: string, content:string)
  {
      return this.httpClient.put(`/api/news/${id}`, {caption, abstract, content})
      .pipe(tap(()=>this.getLastNews(5).subscribe(()=>{})));
  }

  removeNewsRecord(id:string)
  {
    return this.httpClient.delete(`/api/news/${id}`).pipe(tap(()=>this.getLastNews(5).subscribe(()=>{})));
  }

}
