import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { CustomValidationService } from './custom-validation.service';

describe('CustomValidationService', () => {
  let service: CustomValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#notBlank, when form control value is not blank, should not return error', () => {
    const control: AbstractControl = new FormControl();
    control.setValue('value ok');

    const validator: ValidatorFn = service.notBlank();
    const errors: { [key: string]: any } | null = validator(control);

    expect(errors).toBeNull();
  });

  it('#notBlank, when form control value is blank, should return "blank" error', () => {
    const control: AbstractControl = new FormControl();
    control.setValue(' ');

    const validator: ValidatorFn = service.notBlank();
    const errors: { [key: string]: any } | null = validator(control);

    expect(errors.blank).toBeTrue();
  });

  it('#notTheSame, when user1 and user2 form controls values are not the same, should not return error', () => {
    const user1Control: FormControl = new FormControl();
    user1Control.setValue('abc');

    const user2Control: FormControl = new FormControl();
    user2Control.setValue('def');

    const formGroup = new FormGroup({ 'user1': user1Control, 'user2': user2Control});

    const validator: (formGroup: FormGroup) => void = service.notTheSame('user1', 'user2');
    validator(formGroup);

    expect(user2Control.errors).toBeNull();
  });

  it('#notTheSame, when user1 and user2 form controls values are the same, should return "sameName" error', () => {
    const user1Control: FormControl = new FormControl();
    user1Control.setValue('abc');

    const user2Control: FormControl = new FormControl();
    user2Control.setValue('abc');

    const formGroup = new FormGroup({ 'user1': user1Control, 'user2': user2Control});

    const validator: (formGroup: FormGroup) => void = service.notTheSame('user1', 'user2');
    validator(formGroup);

    expect(user2Control.errors.sameName).toBeTrue();
  });
});
