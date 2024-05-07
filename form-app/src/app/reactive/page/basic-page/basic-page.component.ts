import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    isStorage: new FormControl(0, [Validators.required, Validators.min(0)]),
  });
  // public myForm: FormGroup = this.fb.group({
  //   name: [''],
  //   price: [0],
  //   isStorage: [0],
  // });
  constructor(public fb: FormBuilder) {}

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }

  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
  getFieldError(field: string) {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Ete campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }
    return null;
  }
}
