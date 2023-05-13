import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, Subject, takeUntil, tap } from "rxjs";
import { ProductResponse } from "src/app/core/interfaces/product";

import { addCart, products } from "./store/home.actions";
import { productsState } from "./store/home.select";
import { ProductService } from "src/app/core/services/product.service";
import { CartService } from "src/app/core/services/cart.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub$ = new Subject();
  ngOnInit(): void {
    this.productsInState();
  }
  constructor(
    private productService: ProductService,
    private store: Store,
    private cartService: CartService
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
        console.log(res);
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
