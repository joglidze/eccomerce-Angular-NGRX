import { createReducer, on } from '@ngrx/store';
import { ProductResponse } from 'src/app/core/interfaces/product';
import { productPageAction } from './product.action';

export const productPageFeatureKey = 'productPage';

export const productState: any = {};




export const productPageReducer = createReducer(
    productState,
    on(productPageAction,(state,action)=>{
        return action.productPage
    })
)
