import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, of, switchMap, takeUntil, tap } from 'rxjs';
import { CategoryProduct } from 'src/app/core/interfaces/product';

import { products } from './store/home.actions';

import { ProductService } from 'src/app/core/services/product.service';

import { categoryAction } from '../create-category/Store/category.action';
import { CategoryService } from 'src/app/core/services/category.service';
import { selectCategoryState } from '../create-category/Store/category.select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub$ = new Subject();

  ngOnInit(): void {
    this.productsInState();
  }
  constructor(
    private productService: ProductService,
    private store: Store,

    private categoryService: CategoryService
  ) {}

  productsInState() {
    this.productService
      .getProducts()
      .pipe(
        takeUntil(this.sub$),
        tap((product: any) => {
          this.store.dispatch(products({ product }));
        })
      )
      .subscribe((res) => {
       
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

 
}
