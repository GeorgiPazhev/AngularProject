import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRecord } from '../../types/NewsRecord';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient, private router: Router) {   }

  getNews(limit:Number|null)
  {
    let url:string = `/api/news`;
    if (limit != null)
    {
      url = url.concat(`?limit=${limit}`);
    }

    return this.httpClient.get<NewsRecord[]>(url);
  }

  createNewsRecord(caption:string, abstract: string, content:string)
  {
    return this.httpClient.post("/api/news", {caption, abstract, content});
  }

  getNewsRecord(id:string)
  {
      return this.httpClient.get<NewsRecord>(`/api/news/details/${id}`);
  }

}
