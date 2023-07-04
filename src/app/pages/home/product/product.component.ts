import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { productsState } from '../store/home.select';
import { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  productss: any;
  screenWidth: any;
  slideCount = 2;
  sub$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    this.selectProducts();
    register();
  }

  selectProducts() {
    this.store.pipe(select(productsState)).subscribe((res) => {
      this.productss = res;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
