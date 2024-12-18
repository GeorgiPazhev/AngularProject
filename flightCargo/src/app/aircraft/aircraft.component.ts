import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aircraft } from '../../types/Aircraft';
import { Router, RouterLink } from '@angular/router';
import { AircraftService } from '../aircraft.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-aircraft',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aircraft.component.html',
  styleUrl: './aircraft.component.css'
})
export class AircraftComponent {

    @Input("aircraft") currentAircraft:Aircraft|null = null; 
    @Output("retired") retiredEvent = new EventEmitter<Boolean>();

    constructor(private aircraftService: AircraftService, private router:Router, private userService:UserService){}

    deleteAircraft(id:string) {
      this.retiredEvent.emit(true);
      this.aircraftService.retireAircraft(id).subscribe(()=>{this.router.navigate(["/planes"])});
    }

    get isUserAdmin():boolean
    {
      return this.userService.isUserAdmin;
    }
}
