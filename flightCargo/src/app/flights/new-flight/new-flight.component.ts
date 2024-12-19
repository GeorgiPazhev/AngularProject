import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aircraft } from '../../../types/Aircraft';
import { AircraftService } from '../../aircraft.service';
import { FlightsService } from '../flights.service';
import { Airport } from '../../../types/Airport';
import { ActivatedRoute, Router } from '@angular/router';
import { airportValidator } from '../../validators/airportsValidator';
import { datesValidator } from '../../validators/datesValidator';
import { AirportService } from '../../airport/airport.service';
import moment from 'moment';


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
  flightId:string|null = null;


  form = new FormGroup({
    aircraft: new FormControl('', [Validators.required]),
    departureDate: new FormControl('', [Validators.required, ]),
    arrivalDate: new FormControl('', [Validators.required, ]),
    departureAirport: new FormControl('', [Validators.required,]),
    arrivalAirport:  new FormControl('', [Validators.required, ]),
    status:  new FormControl('', [Validators.required, ]),
  }, [airportValidator("departureAirport", "arrivalAirport"), datesValidator("departureDate","arrivalDate")]);

  constructor(private aircraftService:AircraftService, 
              private flightService: FlightsService, 
              private airportService:AirportService, 
              private activatedRoute:ActivatedRoute,
              private router:Router){  }

  ngOnInit(): void {
    
    this.aircraftService.getAllAircraft().subscribe((aircraftList) => this.aircrafts = aircraftList);
    this.airportService.getAirports().subscribe((airportsList) => this.airports = airportsList);

    this.flightId= this.activatedRoute.snapshot.params['id'];
    if (this.flightId != null)
    {
      this.flightService.getFlight(this.flightId).subscribe((currentFlight) => 
      {
        const currentAirCraftId = currentFlight.aircraft._id;
        const departureDate = moment(currentFlight.departureDate.toLocaleString()).format("yyyy-MM-DD hh:mm:ss");
        const arrivalDate = moment(currentFlight.arrivalDate.toLocaleString()).format("yyyy-MM-DD hh:mm:ss");
        const arrivalAirportId = currentFlight.arrivalAirport._id;
        const departureAirportId = currentFlight.departureAirport._id;
        const status = currentFlight.status;
        this.form.setValue({aircraft: currentAirCraftId, departureDate, arrivalDate, departureAirport:departureAirportId, arrivalAirport:arrivalAirportId, status});
      });
    }
  }

  createOrUpdateFlight() 
  {
    if (this.form.invalid)
    {
      return;
    }

    const {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft, status}  = this.form.value;
    if (this.flightId != null)
    {
      this.flightService.updateFlight(departureAirport != null? departureAirport:"", 
                                      arrivalAirport != null?arrivalAirport:"", 
                                      arrivalDate != null ? new Date(arrivalDate): new Date(), 
                                      departureDate!= null ? new Date(departureDate): new Date(), 
                                      aircraft != null ? aircraft:"", status != null? status:"", this.flightId)
                        .subscribe(()=>this.router.navigate(["/flights"]));
      return;
    }
    this.flightService.createNewFlight(departureAirport != null? departureAirport:"", 
                                       arrivalAirport != null?arrivalAirport:"", 
                                       arrivalDate != null ? new Date(arrivalDate): new Date(), 
                                       departureDate!= null ? new Date(departureDate): new Date(), 
                                       aircraft != null ? aircraft:"", status != null? status:"")
                      .subscribe(()=>this.router.navigate(["/flights"]));
  }
  
}
