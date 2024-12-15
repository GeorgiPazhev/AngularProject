import { Component, OnInit } from '@angular/core';
import { NewsRecord } from '../../../types/NewsRecord';

@Component({
  selector: 'app-sidebar-news',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-news.component.html',
  styleUrl: './sidebar-news.component.css'
})
export class SidebarNewsComponent implements OnInit{

  news:NewsRecord[] = [];
  
  constructor()
  {

  }

  ngOnInit(): void {

  }

  
}
