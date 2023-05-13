import { createReducer, on } from "@ngrx/store";
import { ProductResponse } from "src/app/core/interfaces/product";
import { dropDown, products } from "./home.actions";
import { addCart } from "./home.actions";
import { state } from "@angular/animations";
import { ofType } from "@ngrx/effects";

export const homeFeaturekey = "home";

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

export const cartFeaturekey = "cart";
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

export const dropDownKey = "dropDown";

export const dropdownState: ProductResponse[] | any = {
  dropDown: [],
};

export const dropDownReducer = createReducer(
  dropdownState,
  on(dropDown, (state, dropdownitems) => {
    console.log(state);
    return { dropDown: [...state.dropDown, dropdownitems.dropdown] };
  })
);
