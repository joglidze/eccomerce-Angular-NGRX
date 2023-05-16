import { createFeatureSelector, createSelector } from '@ngrx/store';

export const productPageState = createFeatureSelector<any>('productPage');

export const productPageSelect = createSelector(
  productPageState,
  (product) => product
);
