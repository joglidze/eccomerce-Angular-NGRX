import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDirective } from './admin.directive';

@NgModule({
  declarations: [AdminDirective],
  imports: [CommonModule],
  exports: [AdminDirective],
})
export class SharedModule {}
