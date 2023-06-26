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
import { FormsModule } from "@angular/forms";
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeModule } from "../home/home.module";
import { RouterLink, RouterModule } from "@angular/router";


@NgModule({
    declarations: [HeaderComponent, CategoryComponent, SearchResultComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        NzAvatarModule,
        NzBadgeModule,
        NzDropDownModule,
        NzIconModule,
        NzCardModule,
        WelcomeRoutingModule,
        NzMenuModule,
        NzPopoverModule,
        RouterModule,
        
    ]
})
export class HeaderModule {}
