import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { productsState } from '../home/store/home.select';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ProductPost } from 'src/app/core/interfaces/productPost';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { Item } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  productss: any;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectProducts();
  }

  selectProducts() {
    this.store
      .pipe(
        select(productsState),
        tap((products) => {
          const category = this.activatedRoute.snapshot.params['category'];
          this.productss = products.filter((product: Item) => {
            return product.category?.name === category;
          });
        })
      )
      .subscribe();
   
  }
}
