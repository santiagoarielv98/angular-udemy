import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``,
})
export class BasicsPageComponent {
  public nameLower: string = 'santiago';
  public nameUpper: string = 'SANTIAGO';
  public fullName: string = 'saNtIAGo ViLlanuEVa';

  public customDate: Date = new Date();
}
