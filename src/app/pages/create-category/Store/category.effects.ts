import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  categoryAction,
  categoryStoreAction,
  deleteCategory,
} from './category.action';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';
import { Store } from '@ngrx/store';

@Injectable()
export class CategoryEffect {
  constructor(
    private action$: Actions,
    private categoryService: CategoryService,
    private store: Store
  ) {}

  postCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(categoryAction),
      mergeMap((action) =>
        this.categoryService
          .categoryPost(action.name)
          .pipe(map((data: any) => categoryStoreAction({ categories: data })))
      )
    )
  );
  deleteCategory$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(deleteCategory),
        tap((action) => {
       
          this.categoryService
            .deleteCategory(action.updateCategories)
            .subscribe((res) => {
              
            });
            
        })
      ),
    { dispatch: false }
  );
}
