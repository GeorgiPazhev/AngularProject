import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserForAuth } from '../../../types/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, AfterContentChecked{
  profiles:UserForAuth[] = [];

  private reload:boolean = false;

  constructor(private userService:UserService){ }

  ngOnInit(): void 
  {
    this.getAllProfiles();
  }

  ngAfterContentChecked(): void 
  {
    if(this.reload)
    {
      this.getAllProfiles();
      this.reload = false;
    }
  }

  getAllProfiles():void
  {
    this.userService.listProfiles().subscribe((userList)=>{this.profiles = userList});
  }

  makeOrRemoveUserAdmin(id:string, removeAdminPrivileges:boolean)
  {
    this.userService.addOrRemoveUserAdminPrivileges(id,removeAdminPrivileges).subscribe(()=>{this.reload = true;});
  }
}
