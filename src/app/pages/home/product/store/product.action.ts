import { createAction, props } from '@ngrx/store';
import { ProductResponse } from 'src/app/core/interfaces/product';

export const productPageAction = createAction(
  '[Product Page] add product in state',
  props<{ productPage: ProductResponse }>()
);
