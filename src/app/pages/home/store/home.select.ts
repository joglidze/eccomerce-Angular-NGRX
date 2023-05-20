import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { editProduct } from './home.actions';

export const homeState = createFeatureSelector<any>('home');

export const productsState = createSelector(
  homeState,
  (product) => product.product
);

export const cartState = createFeatureSelector<any>('cart');

export const selectState = createSelector(
  cartState,
  (cartProduct) => cartProduct.addCart
);

export const dropdownState = createFeatureSelector<any>('dropDown');

export const selectdropdownState = createSelector(
  dropdownState,
  (product) => product.dropDown
);

export const EditProduct = createFeatureSelector<any>('edit');

export const selectEditProductState = createSelector(
  EditProduct,
  (editProduct) => editProduct.editproduct
);
