import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { emailValidator } from '../validators/emailValidator';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {

  constructor(private userService:UserService, private router:Router){ }
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, emailValidator()]),
    phone: new FormControl('', [Validators.required ]),
  });
  
  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.form.setValue({username, email, phone:tel});
  }
  
  handleEditProfileForm() 
  {
    if (this.form?.invalid) 
    {
      return;
    }

    const{username, email, phone} = this.form?.value;
    if(username != null && email != null && phone != null)
    {
      this.userService.updateProfile(username, email, phone).subscribe(()=>this.router.navigate(["/home"]));
    }
  }

}
