import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

const initialClients = ['Maria', 'Pedro', 'Fernando'];

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Santiago';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name === 'Ariel') {
      this.name = 'Santiago';
      this.gender = 'male';
    } else {
      this.name = 'Ariel';
      this.gender = 'female';
    }
  }
  // constructor
  constructor() {
    this.clients = [...initialClients];
  }

  // i18n Plural
  public clients: string[];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  public buttonDisabled: boolean = false;
  public count: number = 3;
  public messageMap = {
    '=-1': 'Resetear Cliente',
    '=1': 'Espere 1 segundo.',
    other: 'Espere # segundos.',
  };

  deleteClient(): void {
    this.clients.shift();
    if (this.clients.length === 0) {
      this.check();
    }
  }
  reset() {
    this.clients = [...initialClients];
  }

  private check() {
    if (this.clients.length === 0) {
      this.buttonDisabled = true;
      this.countdown();
    }
  }

  private countdown(): void {
    this.count = 3;
    const interval = setInterval(() => {
      if (this.count === 0) {
        this.count--;
        clearInterval(interval);
        this.buttonDisabled = false;
      } else {
        this.count--;
      }
    }, 1000);
  }

  public person = {
    name: 'Santiago',
    age: 25,
    address: 'Buenos Aires, Argentina',
  };

  // Async Pipe
  public myOservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
