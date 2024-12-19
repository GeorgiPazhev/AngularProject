import { Component, OnDestroy, OnInit } from '@angular/core';
import { Flight } from '../../types/Flight';
import { FlightsService } from './flights.service';
import { Observable } from 'rxjs';
import { FlightComponent } from "./flight/flight.component";
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [FlightComponent],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent implements OnInit {

    flights:Flight[]|null = null;
    
    constructor(private flightService:FlightsService, private userService:UserService){}

  ngOnInit(): void 
  {
    if (this.userService.isUserAdmin)
    {
       this.flightService.getAllFlights().subscribe((flightList)=> {this.flights = flightList;});
    }
    else
    {
        this.flightService.getFlights().subscribe((flightList)=> {this.flights = flightList;}); 
    }   
  }

}
