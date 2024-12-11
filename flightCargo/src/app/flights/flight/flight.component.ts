import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../../../types/Flight';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent implements OnInit{
    @Input('flight') singleFlight:Flight|null = null;
    filledPayload:number = 0;
    filledVolume:number = 0;
    
    ngOnInit(): void {
      
      const overallPayload:number = typeof this.singleFlight?.aircraft.payload =='undefined' ? 1 : this.singleFlight?.aircraft.payload;
      const overallVolume:number = typeof this.singleFlight?.aircraft.volume =='undefined' ? 1 : this.singleFlight?.aircraft.volume;
      
      this.singleFlight?.shipments?.forEach((currentShipment)=> {this.filledPayload += currentShipment.weight});
      this.singleFlight?.shipments?.forEach((currentShipment)=> {this.filledVolume += currentShipment.height * currentShipment.height * currentShipment.edge});
      this.filledPayload = (this.filledPayload / overallPayload) * 100;
      this.filledVolume = (this.filledVolume / overallVolume) * 100;
    }

}
