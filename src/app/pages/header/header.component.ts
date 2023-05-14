import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, map, take, takeUntil, tap } from 'rxjs';
import { isLoggedIn, isLoggedout } from '../auth/store/auth.select';
import { logOut } from '../auth/store/auth.action';
import { AuthState } from '../auth/store/auth.reduce';
import { User } from 'src/app/core/interfaces/user';
import { cartState, selectdropdownState } from '../home/store/home.select';
import { ProductPost } from 'src/app/core/interfaces/productPost';
import { CartService } from 'src/app/core/services/cart.service';
import { addCart } from '../home/store/home.actions';
import {
  CategoryProduct,
  ProductResponse,
} from 'src/app/core/interfaces/product';
import { selectCategoryState } from '../create-category/Store/category.select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartArray?: ProductResponse[];
  cartNumber: any;
  sub$ = new Subject();
  isLoggedIn$: Observable<User | undefined> = this.store.pipe(
    select(isLoggedIn)
  );
  isLoggedOut$?: Observable<boolean>;
  
  constructor(
    private store: Store<AuthState>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.isLoggedOut$ = this.store.pipe(select(isLoggedout));
    

    this.getCart();

    this.cart();
  }
  log(data: string): void {
    console.log(data);

    this.isLoggedIn$?.subscribe((res) => {
      console.log(res);
    });

    console.log(this.isLoggedOut$);
  }

  onLogout() {
    this.store.dispatch(logOut());
  }
  cart() {
    this.store
      .pipe(select(cartState), takeUntil(this.sub$))
      .subscribe((res) => {
        this.cartArray = res.addCart;
        console.log(res.addCart);
        console.log(this.cartArray);
      });

    this.store
      .pipe(select(selectdropdownState), takeUntil(this.sub$))
      .subscribe((res) => {
        this.cartNumber = res;
        console.log(this.cartNumber.length);
      });
  }
  getCart() {
    this.cartService
      .getCartProduct()
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        this.store.dispatch(addCart({ cart: res }));
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
