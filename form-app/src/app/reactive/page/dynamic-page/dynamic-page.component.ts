import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.min(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
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
  isValidFieldInArray(formArray: FormArray, index: number) {
    return this.validatorService.isValidFieldInArray(formArray, index);
  }

  onAddToFavorite() {
    if (this.newFavorite.invalid) return;
    const value = this.newFavorite.value;

    // this.favoriteGames.push(new FormControl(value, [Validators.required]));
    this.favoriteGames.push(this.fb.control(value, Validators.required));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
