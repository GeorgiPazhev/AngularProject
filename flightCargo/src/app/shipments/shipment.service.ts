import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../../types/Shipment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private httpClient:HttpClient, private userService:UserService) {

   }

   getAllShipments(flightId:string)
   {
    return this.httpClient.get<Shipment[]>(`/api/shipments/${flightId}/all`);
   }
   
   getShipments(flightId:string)
   {
    return this.httpClient.get<Shipment[]>(`/api/shipments/${flightId}`);
   }

   createShipment(width:number, height:number, edge:number, weight:number, flightId:string)
   {
      return this.httpClient.post("/api/shipments", {width, height, edge, weight, flightId});
   }

   removeShipment(flightId:string, shipmentId:string)
   {
    return this.httpClient.delete(`/api/shipments/${flightId}/${shipmentId}`);
   }
}
