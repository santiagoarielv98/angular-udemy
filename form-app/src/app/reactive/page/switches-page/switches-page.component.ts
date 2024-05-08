import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }
}
