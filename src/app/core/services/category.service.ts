import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { CategoryProduct, CategoryProduct as ProductCategory } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  categoryPost(load: Category): Observable<Category> {
    return this.post<Category>('category', load);
  }

  getCategory(): Observable<ProductCategory[]> {
    return this.get<ProductCategory[]>('category');
  }
  deleteCategory(id:number):Observable<CategoryProduct>{
      return this.delete(`category/${id}`)
  }
}
