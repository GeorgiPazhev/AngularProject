import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';
import { Airport } from '../../../types/Airport';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.css'
})
export class AirportsComponent implements OnInit, AfterContentChecked{
    constructor(private airportService:AirportService){}

    airports:Airport[] = [];
    reload:boolean = false;

    ngOnInit(): void {
      this.getAllAirports();
    }

    ngAfterContentChecked(): void {
      if(this.reload)
      {
        this.getAllAirports();
        this.reload = false;
      }
    }

    getAllAirports():void
    {
      this.airportService.getAirports().subscribe((airportsList)=>{this.airports =airportsList});
    }
}
