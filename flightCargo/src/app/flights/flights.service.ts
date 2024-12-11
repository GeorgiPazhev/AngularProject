import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../../types/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private httpClient:HttpClient) { }

  getFlights()
  {
    return this.httpClient.get<Flight[]>("/api/flights");
  }

  getFlight(id:string)
  {
      return this.httpClient.get<Flight>(`/api/flights/${id}`);
  }
}
