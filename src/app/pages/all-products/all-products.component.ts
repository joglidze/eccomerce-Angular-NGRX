import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { productsState } from '../home/store/home.select';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ProductPost } from 'src/app/core/interfaces/productPost';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { Item } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  productss: any;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.selectProducts();
  }

  selectProducts() {
    this.store
      .pipe(
        select(productsState),
        tap((products) => {
          this.filterFunction(products)
        })
      )
      .subscribe();
    if (!this.productss) {
      this.productService
        .getProducts()
        .pipe(tap((products) => {
          this.filterFunction(products)
        }))
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  filterFunction(products:any) {
    const category: Observable<string> =
      this.activatedRoute.snapshot.params['category'];
    this.productss = products.filter((product: any) => {
      return product.category?.name === category;
    });
  }
}
