import { Component, computed, effect, OnDestroy, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
})
export class PropertiesPageComponent implements OnDestroy {
  public counter = signal(10);

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed<string>(() => {
    return `${this.user()!.first_name} ${this.user()!.last_name}`;
  });

  public userChangedEffect = effect(() => {
    if (this.user().first_name) {
      console.log(
        'user changed',
        `${this.user().first_name} - ${this.counter()}`
      );
    }
  });

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }
  increaseBy(value: number) {
    this.counter.update((c) => c + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
      }
      return current;
    });
  }
}
