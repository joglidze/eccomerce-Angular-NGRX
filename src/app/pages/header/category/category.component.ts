import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of, switchMap, takeUntil } from 'rxjs';
import { selectCategoryState } from '../../create-category/Store/category.select';
import { CategoryProduct } from 'src/app/core/interfaces/product';
import {
  categoryAction,
  deleteCategory,
  updateCategory,
} from '../../create-category/Store/category.action';
import { CategoryService } from 'src/app/core/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  theme = true;
  categories: any;
  ngOnInit(): void {
    this.categoriesSelect();

    this.categoryInState();
  }

  constructor(
    private store: Store,
    private categoryService: CategoryService,
    private route: Router
  ) {}

  categoriesSelect() {
    this.categories = this.store
      .pipe(select(selectCategoryState))
      .subscribe((res) => {
        this.categories = res;
        this.categories = this.categories.slice(2);
      });
  }

  categoryInState() {
    this.categoryService
      .getCategory()
      .pipe(
        switchMap((data) => {
          const names = data.map((category) => category);

          return of(categoryAction({ name: names }));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
  onDelete(id: number) {
    this.categories = this.categories.filter((item: any) => item.id !== id);

    this.store.dispatch(deleteCategory({ updateCategories: id }));
    this.store.dispatch(updateCategory({ categories: this.categories }));
  }
  nav(link: any) {
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigateByUrl(`home/products/${link}`);
    });
  }
}
