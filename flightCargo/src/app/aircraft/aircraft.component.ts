import { Component, Input } from '@angular/core';
import { Aircraft } from '../../types/Aircraft';

@Component({
  selector: 'app-aircraft',
  standalone: true,
  imports: [],
  templateUrl: './aircraft.component.html',
  styleUrl: './aircraft.component.css'
})
export class AircraftComponent {
    @Input("aircraft") currentAircraft:Aircraft|null = null; 
}
