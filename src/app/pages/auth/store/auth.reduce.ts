import { isDevMode } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { User } from "src/app/core/interfaces/user";
import { AuthActions } from ".";

export const authFeatureKey = "auth";

export interface AuthState {
  user?: User;
}
export const authState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  authState,
  on(AuthActions.login, (state, action) => {
    console.log(state, action.user);
    return {
      user: action.user,
    };
  }),
  on(AuthActions.logOut, (state, action) => {
    console.log(state, action);
    return {
      user: undefined,
    };
  })
);
