import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ProductResponse } from '../interfaces/product';
import { ProductPost } from '../interfaces/productPost';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  getProducts(): Observable<ProductResponse[]> {
    return this.get('product');
  }

  postProducts(load: ProductPost): Observable<ProductPost> {
    return this.post<ProductPost>('product', load);
  }
  editProduct(productId: string, product:ProductPost): Observable<ProductPost> {
    return this.put<ProductPost>(`product/${productId}`,product);
  }
}
