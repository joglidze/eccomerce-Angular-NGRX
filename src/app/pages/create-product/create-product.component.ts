import { Component, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/core/services/product.service";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnDestroy {
  background?: string;
  sub$ = new Subject();
  addProduct: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    categoryId: new FormControl("", Validators.required),
  });

  postProduct() {
    console.log(this.addProduct);
    this.productService
      .postProducts(this.addProduct.value)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);
      });
  }

  constructor(private productService: ProductService) {}
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
