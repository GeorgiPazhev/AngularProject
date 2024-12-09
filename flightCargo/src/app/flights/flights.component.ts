import { Component, OnDestroy, OnInit } from '@angular/core';
import { Flight } from '../../types/Flight';
import { FlightsService } from './flights.service';
import { Observable } from 'rxjs';
import { FlightComponent } from "./flight/flight.component";

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [FlightComponent],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent implements OnInit {

    flights:Flight[]|null = null;
    
    constructor(private flightService:FlightsService){}

  ngOnInit(): void 
  {
    this.flightService.getFlights().subscribe((flightList)=> {this.flights = flightList; console.log(flightList);});    
  }

}
