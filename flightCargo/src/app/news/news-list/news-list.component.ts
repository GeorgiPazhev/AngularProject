import { Component, OnInit } from '@angular/core';
import { NewsRecord } from '../../../types/NewsRecord';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit{

  news:NewsRecord[] = [];

  constructor(){}

  ngOnInit()
  {
    
  }


}
