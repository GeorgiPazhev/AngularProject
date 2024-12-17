import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$$ = new BehaviorSubject<String|null>(null);
  public error$ = this.error$$.asObservable();
  constructor() { }

  insertError(err:string)
  {
    this.error$$.next(err);
  }
}
