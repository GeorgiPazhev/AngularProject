import { Component, OnInit, signal } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit{
    error = signal<String|null>(null);
    constructor(private errorService:ErrorService){}

    ngOnInit(): void {
      this.errorService.error$.subscribe((theError) =>{ this.error.set(theError); console.log(theError); });
    }

}
