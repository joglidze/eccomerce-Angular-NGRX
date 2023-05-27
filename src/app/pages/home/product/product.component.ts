import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { productsState } from '../store/home.select';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  productss: any;
  sub$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectProducts()
    register();
  }

  selectProducts() {
    this.store.pipe(select(productsState)).subscribe((res) => {
      this.productss = res;
    });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
