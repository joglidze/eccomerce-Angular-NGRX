import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import * as fromAuth from "./store/auth.reduce";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/auth.effects";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzTabsModule,

    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
