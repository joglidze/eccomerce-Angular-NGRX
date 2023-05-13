import { NgModule, createComponent } from "@angular/core";

import { WelcomeRoutingModule } from "./welcome-routing.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { WelcomeComponent } from "./welcome.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { AuthModule } from "./auth/auth.module";

import { CommonModule } from "@angular/common";
import { NzCardModule } from "ng-zorro-antd/card";
import { HeaderModule } from "./header/header.module";

import { HomeModule } from "./home/home.module";
import { CreateProductComponent } from "./create-product/create-product.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
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
    AuthModule
  ],
  declarations: [WelcomeComponent, CreateProductComponent, CartPageComponent],
  exports: [WelcomeComponent, CreateProductComponent],
})
export class WelcomeModule {}
