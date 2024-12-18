import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AircraftService } from '../../aircraft.service';
import { ActivatedRoute, Router } from '@angular/router';
import { numberValidator } from '../../validators/numberValidator';

@Component({
  selector: 'app-create-update-aircraft',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-update-aircraft.component.html',
  styleUrl: './create-update-aircraft.component.css'
})
export class CreateUpdateAircraftComponent implements OnInit
{

   form = new FormGroup({
      pictureUrl: new FormControl('', [Validators.required,]),
      mark: new FormControl('', [Validators.required,]),
      model: new FormControl('', [Validators.required, ]),
      payload: new FormControl('', [Validators.required, numberValidator() ]),
      volume: new FormControl('', [Validators.required, numberValidator() ]),
    });

    aircraftId:string|null = null;
    
    constructor(private aircraftService:AircraftService, private router:Router, private activatedRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.aircraftId = this.activatedRoute.snapshot.params['id'];
      if (this.aircraftId != null)
      {
        this.aircraftService.getSingleAircraft(this.aircraftId).subscribe((aircraft)=> {
          const {pictureURL, mark, model, payload, volume} = aircraft;
          this.form.setValue({pictureUrl:pictureURL, mark, model, payload:String(payload), volume:String(volume)});
        });
      }
    }
    createOrUpdateAircraft() {
      if (this.form.invalid)
      {
        return;
      }

      const{pictureUrl, mark, model, payload, volume} = this.form.value;

      if (pictureUrl != null && mark != null && model != null && payload != null && volume != null)
      {
        this.aircraftService.createOrUpdateAircraft(mark, model, pictureUrl, Number(payload), Number(volume), this.aircraftId)
                            .subscribe(()=>this.router.navigate(["/planes"]));
      }
    }
}
