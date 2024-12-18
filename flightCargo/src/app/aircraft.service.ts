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
    return this.httpClient.get<Aircraft[]>("/api/aircraft");
  }

  getSingleAircraft(id:string){
    return this.httpClient.get<Aircraft>(`/api/aircraft/${id}`);
  }

  createOrUpdateAircraft(mark:string, model:string, pictureUrl:string, payload:number, volume:number, id:string|null)
  {
    if (id != null)
    {
      return this.httpClient.put(`/api/aircraft/${id}`, {mark, model, pictureUrl, payload, volume});
    }
    return this.httpClient.post(`/api/aircraft`, {mark, model, pictureUrl, payload, volume});
  }

  retireAircraft(id:string)
  {
    return this.httpClient.delete(`/api/aircraft/${id}`);
  }
}
