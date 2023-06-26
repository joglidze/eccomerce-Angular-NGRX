import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

import { ProductPageComponent } from './product-page/product-page.component';
import { AllProductsComponent } from './all-products/all-products.component';


const routes: Routes = [
  {
    path: 'home',

    component: WelcomeComponent,
    children: [
      {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '',
        component: HomeComponent,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },

      {
        path: 'products/:category',

        component: AllProductsComponent,
      },
      {
        path: 'createProduct',
        component: CreateProductComponent,
      },
      {
        path: 'cart',
        component: CartPageComponent,
      },
      {
        path: 'createCategory',
        component: CreateCategoryComponent,
      },
      {
        path: 'product/:id',
        component: ProductPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
