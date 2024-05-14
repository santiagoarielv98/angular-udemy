import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  private _color: string = 'red';
  private _errors: ValidationErrors | null = null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value ?? null;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.setStyle();
  }

  setStyle(): void {
    this.el.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this._errors) {
      this.el.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.el.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }
    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.el.nativeElement.innerHTML = `Minimo ${current}/${min} caracteres`;
      return;
    }
    if (errors.includes('email')) {
      this.el.nativeElement.innerHTML = 'Debe tener el formato de email';
    }
  }
}
