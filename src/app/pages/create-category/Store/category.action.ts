import { createAction, props } from '@ngrx/store';
import { CategoryProduct } from 'src/app/core/interfaces/product';

export const categoryAction = createAction(
  '[create category] create category',
  props<{ name: any }>()
);

export const categoryStoreAction = createAction(
  '[store category] store categories',
  props<{ categories: CategoryProduct[] | any }>()
);

export const deleteCategory = createAction(
  '[delete category] delete',
  props<{ updateCategories: any }>()
);
export const updateCategory = createAction(
  '[update category] update State',
  props<{ categories: any }>()
);
