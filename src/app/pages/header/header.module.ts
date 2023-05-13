import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzIconModule } from "ng-zorro-antd/icon";
import { WelcomeRoutingModule } from "../welcome-routing.module";
import { CategoryComponent } from "./category/category.component";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzCardModule } from "ng-zorro-antd/card";
@NgModule({
  declarations: [HeaderComponent, CategoryComponent],
  imports: [
    CommonModule,

    NzAvatarModule,
    NzBadgeModule,
    NzDropDownModule,
    NzIconModule,
    NzCardModule,
    WelcomeRoutingModule,
    NzMenuModule,
    NzPopoverModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
