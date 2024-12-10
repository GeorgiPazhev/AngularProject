import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmailDirective } from '../../directives/email.directive';
import { PasswordMatchesDirective } from '../../directives/password-matches.directive';

@Component({
  selector: 'app-register-new-user',
  standalone: true,
  imports: [FormsModule, EmailDirective, PasswordMatchesDirective],
  templateUrl: './register-new-user.component.html',
  styleUrl: './register-new-user.component.css'
})
export class RegisterNewUserComponent {

  @ViewChild("registerForm") registerForm:NgForm | undefined;  

  passControlNames:string[] = ['password','retypePassword'];

   constructor(private userService:UserService, private router:Router){}


    handleRegisterForm()
    {
      const { username, password, retypePassword, email, phone } = this.registerForm?.value;
      this.userService.register(username,email,phone,password,retypePassword).subscribe(()=>{this.router.navigate(['/home']);});
    }
}
