import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[appMustBeDifferent]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustBeDifferentDirective, multi: true }]
})
export class MustBeDifferentDirective implements Validator {
  @Input('appMustBeDifferent') MustBeDifferent: string[] = [];

  constructor(private customValidator: CustomValidationService) { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidator.notTheSame(this.MustBeDifferent[0], this.MustBeDifferent[1])(formGroup);
  }
}
