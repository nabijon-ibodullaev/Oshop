import { createReducer, on, State } from '@ngrx/store';
import { increment, decrement } from './product-cart.action';

export const initialState = 0;

export const productReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);
