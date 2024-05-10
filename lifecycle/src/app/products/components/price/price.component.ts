import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('price', 'ngOnInit');

    this.interval$ = interval(1000).subscribe((value) =>
      console.log('tick: ' + value)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('price', 'ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('price', 'ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
