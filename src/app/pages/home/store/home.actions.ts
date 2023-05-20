import { createAction, props } from '@ngrx/store';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { ProductPost } from 'src/app/core/interfaces/productPost';

export const products = createAction(
  '[home Page] get products',
  props<{ product: ProductResponse }>()
);

export const addCart = createAction(
  '[product] add Cart',
  props<{ cart: ProductResponse[] | undefined }>()
);



export const editProduct = createAction(
  '[home Page] get edit products',
  props<{ productEditable: any }>()
);
