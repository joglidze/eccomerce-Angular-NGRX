import { createReducer, on } from '@ngrx/store';
import { CategoryProduct } from 'src/app/core/interfaces/product';
import {
  categoryAction,
  deleteCategory,
  updateCategory,
} from './category.action';
import { Action } from 'rxjs/internal/scheduler/Action';

export const categoryFeatureKey = 'category';

export const categoryState: CategoryProduct[] | any = {
  category: [],
};

export const categoryReducer = createReducer(
  categoryState,
  on(categoryAction, (state, action) => {
    return { category: [...state.category.concat(action.name)] };
  }),
  on(updateCategory, (state, action) => {
    return { category: [...action.categories] };
  })
);
