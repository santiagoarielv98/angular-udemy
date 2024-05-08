import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email: string = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'santiagoariel@email.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }

        subscriber.next(null);
        subscriber.complete();
      }
    );

    return httpCallObservable.pipe(delay(1000));
  }

  /*
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email: string = control.value;

    return of({
      emailTaken: true,
    }).pipe(delay(2000));
  }
  */
}
