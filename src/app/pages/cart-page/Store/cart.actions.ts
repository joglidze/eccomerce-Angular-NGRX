import { createAction, props } from "@ngrx/store";

export const deleteProduct = createAction(
  "[Cart Page] delete product",
  props<{ productId: string }>()
);
