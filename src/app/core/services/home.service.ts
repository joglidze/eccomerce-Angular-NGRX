import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService{

  getProducts():Observable<Product[]>{
     return this.get("product")
  }
}
