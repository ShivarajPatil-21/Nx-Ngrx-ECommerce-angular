import {createReducer, on } from '@ngrx/store';
import {Cart, cartActions} from './cart.action';

export interface CartState{
    cart: Cart[];
    error: string;
}

export const initialState:CartState = {
    cart: [],
    error: '',
}

export const productReducer = createReducer(
    initialState,
    on(cartActions.cartSuccess, (state, action)=>({
        ...state,
        cart: action.products,
        error:'',
    })),
    on(cartActions.cartFailure, (state, action)=>({
       ...state,
       products:[],
       error: action.error,
    })),
)