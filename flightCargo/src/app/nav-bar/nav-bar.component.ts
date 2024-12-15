import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    constructor(private userService:UserService, private router:Router){}

    get isUserLoggedIn():boolean
    {
       return this.userService.isLogged;
    }

    get isUserAdmin()
    {
      return this.userService.isUserAdmin;
    }

    get userName():string
    {
      return this.userService.user!.username;
    }

    logout()
    {
      this.userService.logout().subscribe(()=>{this.router.navigate(['/home'])});
    }
}
