import { Component, OnInit } from '@angular/core';
import { Shipment } from '../../types/Shipment';
import { ShipmentService } from './shipment.service';
import { ShipmentComponent } from './shipment/shipment.component';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [ShipmentComponent],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.css'
})
export class ShipmentsComponent implements OnInit{
   shipments:Shipment[]|null = null;

   constructor(private shipmentService:ShipmentService){}

   ngOnInit(): void {
     this.shipmentService.getShipments().subscribe((allShipments) => this.shipments = allShipments);
   }
}
