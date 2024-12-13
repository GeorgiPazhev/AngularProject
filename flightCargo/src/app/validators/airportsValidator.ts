import { ValidatorFn } from '@angular/forms';

export function airportValidator(departureAirportControlName:string, arrivalAirportControlName:string): ValidatorFn {
  
  
  return (control) => {
    const departureAirport = control.get(departureAirportControlName)?.value;
    const arrivalAirport = control.get(arrivalAirportControlName)?.value;
    const isValid = departureAirport != arrivalAirport;
    return isValid ? null : { airportValidator: true };
  };
}