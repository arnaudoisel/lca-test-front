import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[appNotBlank]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NotBlankDirective, multi: true }]
})
export class NotBlankDirective implements Validator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.notBlank()(control);
  }
}
