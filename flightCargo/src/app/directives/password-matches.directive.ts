import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatches]',
  standalone: true
})
export class PasswordMatchesDirective implements Validator{

  @Input('') passwordControlNames:string[]|null = null;
  

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let passwordControls:Array<AbstractControl|null> = new Array();
    this.passwordControlNames?.forEach((passControlName) => {
      if (control.get(passControlName) != null) 
        passwordControls.push(control.get(passControlName));
    });
    
    let passValuesMatch:boolean = true;
    const passNotMatch = { matchPasswordsValidator: true };

    if (passwordControls.length < 2)
    {
      return passNotMatch;
    }

    for(let index = 1; index<passwordControls.length; index++)
    {
      passValuesMatch = passValuesMatch && passwordControls[index-1]?.value == passwordControls[index]?.value;
    }

    return passValuesMatch ? null : passNotMatch;
    
  }
  

}
