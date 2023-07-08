import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthService } from "src/app/core/services/auth.service";
import { AuthActions } from ".";
import { tap } from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          this.authService.setUser(JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logOut),
        tap((action) => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        })
      ),
    { dispatch: false }
  );
}
