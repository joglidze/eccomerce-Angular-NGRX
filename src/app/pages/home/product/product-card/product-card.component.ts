import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CartService } from 'src/app/core/services/cart.service';
import { productsState, selectdropdownState } from '../../store/home.select';
import { Subject, filter, takeUntil } from 'rxjs';
import { addCart, editProduct } from '../../store/home.actions';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { productPageAction } from '../store/product.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnDestroy, OnInit {
 @Input() product: any;
  sub$ = new Subject();

  constructor(
    private cartService: CartService,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit(): void {
   
  }

  
  onEdit(product: any) {
    this.store.dispatch(editProduct({ productEditable: product }));
    this.store
      .pipe(
        select(selectdropdownState),
        filter((state) => {
          if (state !== product) {
            
              
            return product;
          }
        })
      )
      .subscribe();
  }

  addCart(product: any) {
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
  onProduct(productId: string, product: ProductResponse) {
    console.log(productId);
    this.store.dispatch(productPageAction({ productPage: product }));
    this.router.navigateByUrl(`home/product/${productId}`);
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
