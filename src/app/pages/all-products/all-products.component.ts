import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { productsState } from '../home/store/home.select';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  productss: any;
  category: Observable<string> =
    this.activatedRoute.snapshot.params['category'];
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.selectProducts();

    this.category;
  }

  selectProducts() {
    this.store
      .pipe(
        select(productsState),
        tap((products) => {
          this.filterFunction(products);
        })
      )
      .subscribe();
    if (!this.productss) {
      this.productService
        .getProducts()
        .pipe(
          tap((products) => {
            this.filterFunction(products);
          })
        )
        .subscribe()
    }
  }

  filterFunction(products: any) {
    this.productss = products.filter((product: any) => {
      return product.category?.name === this.category;
    });
  }
}
