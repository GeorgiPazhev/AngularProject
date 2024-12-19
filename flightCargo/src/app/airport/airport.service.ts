import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../../types/Airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private httpClient: HttpClient) { }
  
  getAirports()
  {
    return this.httpClient.get<Airport[]>("/api/airports");
  }

  getSingleAirport(id:string)
  {
    return this.httpClient.get<Airport>(`/api/airports/${id}`);
  }

  createOrUpdateAirport(name:string, country:string, province:string, settlement:string, street:string, lat: string|null, lng:string|null, id: string|null, addressId:string|null)
  {
    if (id != null)
    {
      console.log("Service: AddressId: ", addressId);
      return this.httpClient.put(`/api/airports/${id}`, {name, country, province, settlement, street, lat, lng, addressId});
    }
    
    return this.httpClient.post("/api/airports",{name, country, province, settlement, street, lat, lng});

  }
}
