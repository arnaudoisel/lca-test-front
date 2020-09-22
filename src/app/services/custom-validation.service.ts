import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  notBlank(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = control.value.trim() !== "";
      return valid ? null : { blank: true };
    };
  }

  notTheSame(user1: string, user2: string) {
    return (formGroup: FormGroup) => {
      const user1Control = formGroup.controls[user1];
      const user2Control = formGroup.controls[user2];

      if (!user1Control || !user2Control) {
        return null;
      }

      if (user2Control.errors && !user2Control.errors.sameName) {
        return null;
      }

      if (user1Control.value === user2Control.value) {
        user2Control.setErrors({ sameName: true });
      } else {
        user2Control.setErrors(null);
      }
    }
  }
}
