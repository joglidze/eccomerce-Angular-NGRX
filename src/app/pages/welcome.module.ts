import { NgModule, createComponent } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { WelcomeComponent } from './welcome.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AuthModule } from './auth/auth.module';

import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HeaderModule } from './header/header.module';

import { HomeModule } from './home/home.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { StoreModule } from '@ngrx/store';
import {
  categoryFeatureKey,
  categoryReducer,
} from './create-category/Store/category.reduce';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffect } from './create-category/Store/category.effects';
@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzLayoutModule,

    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    CommonModule,
    HomeModule,
    AuthModule,
    StoreModule.forFeature(categoryFeatureKey, categoryReducer),
    EffectsModule.forFeature([CategoryEffect]),
  ],
  declarations: [
    WelcomeComponent,
    CreateProductComponent,
    CartPageComponent,
    CreateCategoryComponent,
  ],
  exports: [WelcomeComponent, CreateProductComponent],
})
export class WelcomeModule {}
