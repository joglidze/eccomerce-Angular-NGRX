import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDirective } from './admin.directive';
import { UserDirective } from './user.directive';

@NgModule({
  declarations: [AdminDirective, UserDirective],
  imports: [CommonModule],
  exports: [AdminDirective,UserDirective],
})
export class SharedModule {}
