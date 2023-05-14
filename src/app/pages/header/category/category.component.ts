import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';
import { selectCategoryState } from '../../create-category/Store/category.select';
import { CategoryProduct } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  theme = true;
  categories$: any;
  ngOnInit(): void {
    this.categories();
  }

  constructor(private store: Store) {}

  categories() {
    this.store.pipe(select(selectCategoryState)).subscribe((res) => {
      this.categories$ = res;
      console.log(res);
    });
  }
}
