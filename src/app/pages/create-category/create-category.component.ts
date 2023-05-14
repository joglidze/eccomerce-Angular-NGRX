import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { categoryAction } from './Store/category.action';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private store: Store) {}

  onSubmit() {
    console.log(this.categoryForm.value);
    this.store.dispatch(categoryAction({ name:this.categoryForm.value }));
  }
}
