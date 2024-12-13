import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../../types/Flight';
import { Airport } from '../../types/Airport';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  
  createNewFlight(departureAirport:string, arrivalAirport:string, arrivalDate:Date, departureDate:Date, aircraft:string) {
    return this.httpClient.post("/api/flights", {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft});
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

  getAirports()
  {
    return this.httpClient.get<Airport[]>(`/api/airports`);
  }
}
