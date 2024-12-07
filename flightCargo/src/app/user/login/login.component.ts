import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("loginForm") logInForm:NgForm | undefined;

  constructor(private userService:UserService, private router:Router)
  {

  }

  handleLoginForm()
  {
    
    if (!this.logInForm?.invalid)
    {
      const { username, password } = this.logInForm?.value;
      
      console.log("user name:", username);
      this.userService.login(username,password).subscribe(()=> {this.router.navigate(['/home']);});
    }
    else
    {
      console.log("Invalid data!");
    }
    
    this.logInForm?.reset();
    
  }
}
