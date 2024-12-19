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

   get isUserAdmin():boolean
   {
    return this.isLogged && this.user!.roles.includes('6755a6ec602e232ec26c8afe');
   }

  getUserId():string|undefined
  { 
    return this.user?._id;
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
      .pipe(tap((user) => {this.user$$.next(user);}));
  }

  updateProfile(username: string, email: string, phone?: string) {
    return this.client
      .put<UserForAuth>(`/api/users/profile`, {
        username,
        email,
        tel:phone,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  listProfiles()
  {
    return this.client.get<UserForAuth[]>("/api/users/profiles");
  }

  addOrRemoveUserAdminPrivileges(id:string, removeAdmin:boolean)
  {
    return (removeAdmin) ? this.client.put(`/api/users/profile/remove-admin/${id}`, {}) : this.client.put(`/api/users/profile/create-admin/${id}`, {});
  }
}
