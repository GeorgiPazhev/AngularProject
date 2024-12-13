import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aircraft } from '../../../types/Aircraft';
import { AircraftService } from '../../aircraft.service';
import { FlightsService } from '../flights.service';
import { Airport } from '../../../types/Airport';
import { Router } from '@angular/router';
import { airportValidator } from '../../validators/airportsValidator';
import { datesValidator } from '../../validators/datesValidator';


@Component({
  selector: 'app-new-flight',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit{

  aircrafts:Aircraft[] = [];
  airports:Airport[] = [];

  form = new FormGroup({
    aircraft: new FormControl('', [Validators.required]),
    departureDate: new FormControl('', [Validators.required, ]),
    arrivalDate: new FormControl('', [Validators.required, ]),
    departureAirport: new FormControl('', [Validators.required,]),
    arrivalAirport:  new FormControl('', [Validators.required, ]),
  }, [airportValidator("departureAirport", "arrivalAirport"), datesValidator("departureDate","arrivalDate")]);

  constructor(private aircraftService:AircraftService, private flightService: FlightsService, private router:Router){  }

  ngOnInit(): void {
    this.aircraftService.getAllAircraft().subscribe((aircraftList) => this.aircrafts = aircraftList);
    this.flightService.getAirports().subscribe((airportsList) => this.airports = airportsList);
  }

  createNewFlight() 
  {
    if (this.form.invalid)
    {
      return;
    }

    const {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft}  = this.form.value;

    this.flightService.createNewFlight(departureAirport != null? departureAirport:"", 
                                       arrivalAirport != null?arrivalAirport:"", 
                                       arrivalDate != null ? new Date(arrivalDate): new Date(), 
                                       departureDate!= null ? new Date(departureDate): new Date(), 
                                       aircraft != null ? aircraft:"")
                      .subscribe(()=>this.router.navigate(["/flights"]));
  }
  
}
