import { ValidatorFn } from '@angular/forms';

export function datesValidator(departureDateControlName:string, arrivalDateControlName:string): ValidatorFn 
{
  
  return (control) => {
    const departureDate = new Date(control.get(departureDateControlName)?.value);
    const arrivalDate = new Date(control.get(arrivalDateControlName)?.value);
    const isValid = (departureDate.getTime() < arrivalDate.getTime()) && ((arrivalDate.getTime() - departureDate.getTime()) > 30*60*1000);
    return isValid ? null : { datesValidator: true };
  };
}