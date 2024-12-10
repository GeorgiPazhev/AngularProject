import { Component, Input } from '@angular/core';
import { Shipment } from '../../../types/Shipment';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {
  @Input('shipment') singleShipment:Shipment|null = null;
  
}
