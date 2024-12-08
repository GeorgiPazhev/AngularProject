import { ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  
  const regExp = new RegExp(`[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`);//new RegExp(`[A-Za-z0-9]{6,}@[A-Za-z0-9]\.[A-Za-z0-9]`);

  return (control) => {
    const isInvalid = control.value === '' || regExp.test(control.value);
    return isInvalid ? null : { emailValidator: true };
  };
}