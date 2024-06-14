import { catchError, exhaustMap, map, of } from "rxjs";
import { cartActions } from "./cart.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { CartService } from "./cart.service";



                                                                                                                


export const loadCart = createEffect(
    (actions$ = inject(Actions), cartService = inject(CartService)) => {
      return actions$.pipe(
        ofType(cartActions.loadCart),
        exhaustMap(() =>
          cartService.getCart().pipe(
            map((products) =>{
              console.log(products)
              return cartActions.cartSuccess({ products })
            }
            ),
            catchError((error) =>
              of(cartActions.cartFailure({ error }))
            )  
          )
        )
      );
   
    },
    { functional: true }
  );