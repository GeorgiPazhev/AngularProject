import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShipmentService } from '../shipment.service';
import { FlightsService } from '../../flights/flights.service';
import { Flight } from '../../../types/Flight';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-new-shipment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-shipment.component.html',
  styleUrl: './new-shipment.component.css'
})
export class NewShipmentComponent implements OnInit {
  
  
  form = new FormGroup({
    width: new FormControl('', [Validators.required,]),
    height: new FormControl('', [Validators.required,]),
    edge: new FormControl('', [Validators.required,]),
    flight: new FormControl('', [Validators.required]),
  });

  flightId:string|null = null;
  flight:Flight|null = null;

  constructor(private shipmentService:ShipmentService, private flightsService:FlightsService, private router:Router, private activatedRoute:ActivatedRoute)
  {
    
  }

  ngOnInit(): void {
    
    this.flightId = this.activatedRoute.snapshot.params['flightId'];
    if (this.flightId != null)
    {
      this.flightsService.getFlight(this.flightId).subscribe((curFlight) => this.flight = curFlight);
    }
    
  }

  createNewShipment()
  {

    this.router.navigate(["/flights"]);
  }



}
