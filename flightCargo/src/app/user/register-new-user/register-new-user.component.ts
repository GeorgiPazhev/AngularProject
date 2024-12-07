import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-new-user.component.html',
  styleUrl: './register-new-user.component.css'
})
export class RegisterNewUserComponent {

  @ViewChild("loginForm") registerForm:NgForm | undefined;  
   constructor(private userService:UserService, private router:Router){}


    handleRegisterForm()
    {

    }
}
