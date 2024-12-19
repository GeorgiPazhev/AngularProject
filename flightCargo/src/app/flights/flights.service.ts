import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../../types/Flight';
import { Airport } from '../../types/Airport';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  
  createNewFlight(departureAirport:string, arrivalAirport:string, arrivalDate:Date, departureDate:Date, aircraft:string, status:string) {
    return this.httpClient.post("/api/flights", {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft, status});
  }

  constructor(private httpClient:HttpClient) { }

  getFlights()
  {
    return this.httpClient.get<Flight[]>("/api/flights");
  }

  getFlight(id:string)
  {
      return this.httpClient.get<Flight>(`/api/flights/${id}`);
  }

  updateFlight(departureAirport:string, arrivalAirport:string, arrivalDate:Date, departureDate:Date, aircraft:string, status:string, id:string)
  {
    return this.httpClient.put(`/api/flights/${id}`, {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft, status});
  }

}
