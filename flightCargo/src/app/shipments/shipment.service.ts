import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../../types/Shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private httpClient:HttpClient) {

   }

   getShipments()
   {
      return this.httpClient.get<Shipment[]>("/api/shipments");
   }
}
