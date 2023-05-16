import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { productPageSelect } from '../home/product/store/product.select';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { ProductPost } from 'src/app/core/interfaces/productPost';
import { CartService } from 'src/app/core/services/cart.service';
import { addCart, dropDown } from '../home/store/home.actions';
import { takeUntil } from 'rxjs';

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

  constructor(private store: Store, private cartService: CartService) {}

  getProduct() {
    this.store.pipe(select(productPageSelect)).subscribe((res) => {
      this.product = res;
    });
  }

  addCart(product: any, quantity?: any) {
    this.store.dispatch(dropDown({ dropdown: product }));

    this.cartService
      .cartPost({
        productId: product.id,
        quantity: quantity,
      })
      .pipe()
      .subscribe((res) => {
        if (res) {
          console.log(res);
        }

        this.store.dispatch(addCart({ cart: [res] }));
      });
  }
}
