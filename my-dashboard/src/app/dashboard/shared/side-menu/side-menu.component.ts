import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
