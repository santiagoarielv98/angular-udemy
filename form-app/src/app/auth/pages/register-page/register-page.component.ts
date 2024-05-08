import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as CustomValidators from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.firstNameAndLastnamePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        ,
        [this.emailValidatorService],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.cantBeStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.isFieldOneEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ) {}

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
