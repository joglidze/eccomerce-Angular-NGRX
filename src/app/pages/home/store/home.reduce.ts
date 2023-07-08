import { createReducer, on } from '@ngrx/store';
import { ProductResponse } from 'src/app/core/interfaces/product';
import {  editProduct, products } from './home.actions';
import { addCart } from './home.actions';
import { state } from '@angular/animations';
import { ofType } from '@ngrx/effects';
import { ProductPost } from 'src/app/core/interfaces/productPost';

export const homeFeaturekey = 'home';

export interface HomeState {
  products?: ProductResponse;
}

export const homeState: any = {
  products: undefined,
};

export const homeReducer = createReducer(
  homeState,
  on(products, (state, action) => {
    return {
      product: action.product,
    };
  })
);
export interface State {
  products: any;
}

export const cartFeaturekey = 'cart';
export const cartState: any = {
  cart: undefined,
};
export const cartReducer = createReducer(
  cartState,

  on(addCart, () => cartState),
  on(addCart, (state, { cart }) => {
    return { addCart: cart };
  })
);

export const dropDownKey = 'dropDown';



export const editableKey = 'edit';

export const editProductState: ProductPost | any = {
  editTarget: undefined,
};

export const editStateReduce = createReducer(
  editProductState,
  on(editProduct, (state, editproduct) => {
    
    return { editproduct: editproduct.productEditable };
  })
);
