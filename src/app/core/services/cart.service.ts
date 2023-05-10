import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  cartPost(payload: { productId: string; quantity: number }): Observable<any> {
    return this.post('cart', payload);
  }
}
