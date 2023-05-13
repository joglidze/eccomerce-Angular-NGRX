import { Component, OnDestroy } from "@angular/core";
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subject, tap, takeUntil, takeLast } from "rxjs";
import { User } from "src/app/core/interfaces/user";
import { AuthService } from "src/app/core/services/auth.service";
import { login, register } from "./store/auth.action";
import { loginResponse } from "src/app/core/interfaces/auth";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnDestroy {
  changeTab: number = 1;
  sub$ = new Subject();
  registerform: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<User>
  ) {}

  registerUser() {
    this.authService
      .register(this.registerform.value)
      .pipe(takeUntil(this.sub$))

      .subscribe((res) => {
        console.log(res);

        if (res) {
          this.changeTab = 0;
          console.log(this.changeTab);
        }
      });
  }

  loginUser() {
    this.authService
      .login(this.loginForm.value)
      .pipe(
        takeUntil(this.sub$),
        tap((user: loginResponse) => {
          this.store.dispatch(login({ ...user }));
        })
      )
      .subscribe((res) => {
        this.authService.setToken(res.accessToken);

        if (res) {
          this.router.navigateByUrl("/home");
        }
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
