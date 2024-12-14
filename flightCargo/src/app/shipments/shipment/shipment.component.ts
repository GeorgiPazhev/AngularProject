import { Component, Input } from '@angular/core';
import { Shipment } from '../../../types/Shipment';
import { ShipmentService } from '../shipment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipmentsComponent } from '../shipments.component';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {
  @Input('shipment') singleShipment:Shipment|null = null;

  constructor(private shipmentService:ShipmentService, private router:Router, private parentComponent:ShipmentsComponent){}

  removeShipment()
  {
    if (this.singleShipment?._id != null && this.singleShipment.flightId != null)
    {
      this.shipmentService.removeShipment(this.singleShipment?.flightId, this.singleShipment?._id).subscribe(()=>{this.parentComponent.reloadData()});
    }
    
  }
}
