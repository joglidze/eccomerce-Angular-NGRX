import { createReducer, on } from '@ngrx/store';
import { CategoryProduct } from 'src/app/core/interfaces/product';
import { categoryAction, categoryStoreAction } from './category.action';

export const categoryFeatureKey = 'category';

export const categoryState: CategoryProduct[] | any = {
  category: [],
};

export const categoryReducer = createReducer(
  categoryState,
  on(categoryAction, (state, action) => {
    return { category: [...state.category, action.name] };
  })
);
