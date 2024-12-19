import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportService } from '../airport.service';
import { numberValidator } from '../../validators/numberValidator';

@Component({
  selector: 'app-create-update-airport',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-update-airport.component.html',
  styleUrl: './create-update-airport.component.css'
})
export class CreateUpdateAirportComponent implements OnInit {
    form = new FormGroup({
          name: new FormControl('', [Validators.required,]),
          country: new FormControl('', [Validators.required,]),
          province: new FormControl('', [Validators.required, ]),
          settlement: new FormControl('', [Validators.required,  ]),
          street: new FormControl('', []),
          lat: new FormControl('', [Validators.required, numberValidator() ]),
          lng: new FormControl('', [Validators.required, numberValidator() ]),
        });
    
        airportId:string|null = null;
        addressId:string|null = null;

    constructor(private airportService:AirportService, private activatedRoute: ActivatedRoute, private router:Router){}

    ngOnInit(): void {
      this.airportId = this.activatedRoute.snapshot.params['id'];
      if (this.airportId != null)
      {
        console.log(this.airportId);
        this.airportService.getSingleAirport(this.airportId).subscribe((airport)=> {
          console.log(airport);
          const airportName = airport.name != null ? airport.name : "";
          const airportCountry = airport.address.country != null ? airport.address.country : "";
          const airportProvince = airport.address.province != null ? airport.address.province : "";
          const airportSettlement = airport.address.settlement != null ? airport.address.settlement : "";
          const airportStreet = airport.address.street != null ? airport.address.street : "";
          const airportLatitude = airport.address.lat != null ? airport.address.lat : "";
          const airportLongitude = airport.address.lng != null ? airport.address.lng : "";
          this.addressId = airport.address._id;
          console.log("Addressid:", this.addressId);
          this.form.setValue({name:airportName, country:airportCountry, province:airportProvince, settlement:airportSettlement, street:airportStreet, lat:airportLatitude, lng:airportLongitude});
        });
      }
    }

    createOrUpdateAirport()
    {
      if (this.form.invalid)
      {
        return;
      }

      const{name, country, province, settlement, street, lat, lng} = this.form.value;

      if (name != null && country != null && settlement != null && province!=null && street != null && lat != null && lng!=null)
      {
        this.airportService.createOrUpdateAirport(name, country, province, settlement, street, lat, lng, this.airportId, this.addressId)
                           .subscribe(()=>{this.router.navigate(["/airports"])});
      }
    }
}
