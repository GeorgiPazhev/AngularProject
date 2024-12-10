import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../aircraft.service';
import { Aircraft } from '../../types/Aircraft';
import { AircraftComponent } from "../aircraft/aircraft.component";

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [AircraftComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent implements OnInit{
    planes:Aircraft[] = [];
    constructor(private aircraftService:AircraftService)
    {

    }

    ngOnInit(): void {
       this.aircraftService.getAllAircraft().subscribe((aircrafts)=>this.planes =aircrafts);
    }
}
