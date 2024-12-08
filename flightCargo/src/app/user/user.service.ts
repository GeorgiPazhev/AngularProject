import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForAuth } from '../../types/User';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | null = null;
  userSubscription: Subscription | null = null;
  constructor(private client:HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
   }

   
   get isLogged(): boolean {
    return !!this.user;
  }

   login(username:string, password:string)
   {
    return this.client
    .post<UserForAuth>('/api/login', { email:username, password })
    .pipe(tap((user) => this.user$$.next(user)));
   }

   logout() {
    return this.client
      .post('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
  }

  register(
    username: string,
    email: string,
    phone: string,
    password: string,
    rePassword: string
  ) {
    return this.client
      .post<UserForAuth>('/api/register', {
        username,
        email,
        tel: phone,
        password,
        rePassword,
      })
      .pipe(tap((user) => {this.user$$.next(user); console.log(user);}));
  }
}
