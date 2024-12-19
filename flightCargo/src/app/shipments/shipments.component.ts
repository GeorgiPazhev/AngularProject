import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Shipment } from '../../types/Shipment';
import { ShipmentService } from './shipment.service';
import { ShipmentComponent } from './shipment/shipment.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [ShipmentComponent],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.css'
})
export class ShipmentsComponent implements OnInit{
   
   shipments:Shipment[]|null = null;
   flightId:string|null = null;
   constructor(private shipmentService:ShipmentService, private activatedRoute:ActivatedRoute, private userService:UserService){}
  
   ngOnInit(): void {
     this.flightId = this.activatedRoute.snapshot.params['flightId'];
     this.reloadData();
   }

   reloadData(): void { 
    if( this.flightId != null)
      {
        if (this.userService.isUserAdmin)
          {
            this.shipmentService.getAllShipments(this.flightId).subscribe((allShipments) => this.shipments = allShipments);
          }
          else
          {
            this.shipmentService.getShipments(this.flightId).subscribe((allShipments) => this.shipments = allShipments);
          }
      }
  }
}
