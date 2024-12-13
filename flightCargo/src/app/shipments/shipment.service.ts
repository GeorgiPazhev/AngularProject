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

   getShipments(flightId:string)
   {
    const userId = this.userService.getUserId();  
    return this.httpClient.get<Shipment[]>(`/api/shipments/${flightId}`);
   }

   createShipment(width:number, height:number, edge:number, weight:number, flightId:string)
   {
      return this.httpClient.post("/api/shipments", {width, height, edge, weight, flightId});
   }
}
