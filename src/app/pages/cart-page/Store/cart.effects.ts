import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deleteProduct } from "./cart.actions";
import { Injectable } from "@angular/core";
import { exhaustMap, switchMap, tap } from "rxjs";
import { CartService } from "src/app/core/services/cart.service";

@Injectable()
export class CartPageEffect {
  constructor(private action$: Actions, private cartService: CartService) {}
  deleteUser$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(deleteProduct),
        switchMap((action) => {
          return this.cartService.deleteProduct(action.productId);
        })
      ),
    { dispatch: false }
  );
}
