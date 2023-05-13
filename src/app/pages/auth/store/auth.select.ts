import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reduce';

export const authState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(authState, (auth) => auth.user);

export const isLoggedout = createSelector(authState, (auth) => !auth.user);
