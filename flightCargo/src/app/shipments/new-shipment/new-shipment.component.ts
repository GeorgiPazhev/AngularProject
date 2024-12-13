import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShipmentService } from '../shipment.service';
import { FlightsService } from '../../flights/flights.service';
import { Flight } from '../../../types/Flight';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { numberValidator } from '../../validators/numberValidator';
import { capicityValidator } from '../../validators/capicityValidator';



@Component({
  selector: 'app-new-shipment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-shipment.component.html',
  styleUrl: './new-shipment.component.css'
})
export class NewShipmentComponent implements OnInit {

  
  flightId:string|null = null;
  flight:Flight|null = null;

  form = new FormGroup({
    width: new FormControl('', [Validators.required, numberValidator()]),
    height: new FormControl('', [Validators.required, numberValidator()]),
    edge: new FormControl('', [Validators.required, numberValidator()]),
    weight: new FormControl('', [Validators.required, numberValidator()]),
  },[capicityValidator("width", "height", "edge", "weight", this)]);

 

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

  calculateShipmentPrice()
  {
    return Number(this.form?.value?.weight) * 3;
  }

  createNewShipment()
  {
    if (this.form.invalid) {
      return;
    }

    const 
    {
      width,
      height,
      edge,
      weight
    } = this.form.value;
    if (this.flightId != null)
    {
      console.log("Send shipment");
      this.shipmentService.createShipment(Number(width), Number(height),Number(edge),Number(weight), this.flightId)
                          .subscribe(()=>{this.router.navigate(["/flights"]);});
    }
  }

  getOverallVolume():number {
    let overall:number = 0;
    this.flight?.shipments.forEach((shipment)=>{overall += shipment.width * shipment.height * shipment.edge});
    return overall;
  }
  getOverallPayload():number {
    let overall:number = 0;
    this.flight?.shipments.forEach((shipment)=>{overall += shipment.weight});
    return overall;
  }
  
}
