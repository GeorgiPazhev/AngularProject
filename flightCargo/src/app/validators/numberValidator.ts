import { ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  
  const regExp = new RegExp(`[0-9]+(\.[0-9]+)*`);
  return (control) => {
    const isValid = control.value === '' || regExp.test(control.value);
    return isValid ? null :  { numberValidator: true };
  };
}