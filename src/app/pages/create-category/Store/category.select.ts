import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categoryState } from './category.reduce';

export const categoryStatekey = createFeatureSelector<any>('category');

export const selectCategoryState = createSelector(
  categoryStatekey,
  (category) => category.category
);
