import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  dropdownState,
  productsState,
  selectdropdownState,
} from "../store/home.select";
import { ProductPost } from "src/app/core/interfaces/productPost";
import { addCart, dropDown } from "../store/home.actions";
import { CartService } from "src/app/core/services/cart.service";
import { ProductResponse } from "src/app/core/interfaces/product";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit, OnDestroy {
  productss: any;
  sub$ = new Subject();

  constructor(private store: Store, private cartService: CartService) {}

  ngOnInit(): void {
    this.selectProducts();
  }

  selectProducts() {
    this.store
      .pipe(select(productsState), takeUntil(this.sub$))
      .subscribe((res) => {
        this.productss = res;
      });
  }

  addCart(product: any) {
    this.store.dispatch(dropDown({ dropdown: product }));

    this.cartService
      .cartPost({
        productId: product.id,
        quantity: 1,
      })
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);
      });

    this.getCartProducts();
  }

  getCartProducts() {
    this.cartService
      .getCartProduct()
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);
        this.store.dispatch(addCart({ cart: res }));
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
