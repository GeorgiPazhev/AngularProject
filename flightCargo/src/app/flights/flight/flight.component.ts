import { Component, Input } from '@angular/core';
import { Flight } from '../../../types/Flight';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
    @Input('flight') singleFlight:Flight|null = null;
}
