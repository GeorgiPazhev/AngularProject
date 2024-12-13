import { ValidatorFn } from '@angular/forms';
import { Aircraft } from '../../types/Aircraft';
import { Flight } from '../../types/Flight';
import { NewShipmentComponent } from '../shipments/new-shipment/new-shipment.component';

export function capicityValidator(widthControlName:string, 
                                heightControlName:string, 
                                edgeControlName:string,
                                weightControlName:string, 
                                comp:NewShipmentComponent): ValidatorFn {
  
  return (control) => {
    const weight = Number(control.get(weightControlName)?.value);
    const width = Number(control.get(widthControlName)?.value);
    const height = Number(control.get(heightControlName)?.value);
    const edge = Number(control.get(edgeControlName)?.value);
    const overallVolume = comp?.getOverallVolume();
    const overallWeight = comp?.getOverallPayload();
    
    const isInvalid = weight == Number.NaN || 
                      height == Number.NaN || 
                      width==Number.NaN || 
                      edge==Number.NaN || 
                      ((weight + overallWeight) > Number(comp?.flight?.aircraft?.payload)) || 
                      (((width*height*edge + overallVolume) >= Number(comp?.flight?.aircraft?.volume)));
    return isInvalid ? { capacityValidator: true } : null;
  };
}