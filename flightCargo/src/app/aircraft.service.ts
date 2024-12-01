import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aircraft } from '../types/Aircraft';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private httpClient:HttpClient) { }

  getAllAircraft()
  {
    return this.httpClient.get<Aircraft[]>("http://localhost:3000/api/aircraft");
  }
}
