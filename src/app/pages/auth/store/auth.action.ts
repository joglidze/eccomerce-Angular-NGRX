import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/interfaces/user";

export const login = createAction(
  "[Login Page] User login",
  props<{ user: User }>()
);

export const register = createAction(
  "[register Page] User register",
  props<{ response: any }>()
);

export const logOut = createAction("[Top menu] Logout");
