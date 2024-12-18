import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AircraftService } from '../aircraft.service';
import { Aircraft } from '../../types/Aircraft';
import { AircraftComponent } from "../aircraft/aircraft.component";
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [AircraftComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent implements OnInit, AfterContentChecked{

    planes:Aircraft[] = [];
    reload = false;
    constructor(private aircraftService:AircraftService, private userService:UserService)
    {

    }

    ngOnInit(): void {
      this.getAllAircrafts();
    }

    getAllAircrafts():void
    {
      this.aircraftService.getAllAircraft().subscribe((aircrafts)=>this.planes = aircrafts);
    }

    setReload() 
    {
      this.reload=true;
    }

    ngAfterContentChecked(): void
    {
      if(this.reload)
      {
        this.getAllAircrafts();
        this.reload = false;
      }
    }

    get isUserAdmin():boolean
    {
      return this.userService.isUserAdmin;
    }
}
