import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { productPageSelect } from '../home/product/store/product.select';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { ProductPost } from 'src/app/core/interfaces/productPost';
import { CartService } from 'src/app/core/services/cart.service';
import { addCart } from '../home/store/home.actions';
import { takeUntil, tap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: any;
  quantity?: string | number = 1;
  ngOnInit(): void {
    this.getProduct();
  }

  constructor(
    private store: Store,
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  getProduct() {
    this.store.pipe(select(productPageSelect)).subscribe((res) => {
      this.product = res;
    });
    console.log(Boolean({}));
    if (JSON.stringify(this.product) === JSON.stringify({})) {
      this.productService
        .getProductById(this.route.snapshot.params['id'])
        .subscribe((res) => {
          this.product = res;
        });
    }
  }

  addCart(product: any, quantity?: any) {
   
    this.cartService
      .cartPost({
        productId: product.id,
        quantity: 10,
      })
      .pipe(
        tap((test) => {
          console.log(test);
        })
      )
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.getCartProducts();
        }
      });
  }
  getCartProducts() {
    this.cartService
      .getCartProduct()
      .pipe()
      .subscribe((res) => {
        console.log(res);
        this.store.dispatch(addCart({ cart: res }));
      });
  }
}
