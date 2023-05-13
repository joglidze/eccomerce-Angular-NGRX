import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { ProductResponse } from '../interfaces/product';
import { deleteProduct } from 'src/app/pages/welcome/cart-page/Store/cart.actions';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  cartPost(payload: {
    productId: string;
    quantity: number;
  }): Observable<ProductResponse> {
    return this.post<ProductResponse>('cart', payload);
  }

  getCartProduct(): Observable<ProductResponse[]> {
    return this.get('cart');
  }

  deleteProduct(productId: string) {
    return this.delete(`cart/${productId}`);
  }
}
