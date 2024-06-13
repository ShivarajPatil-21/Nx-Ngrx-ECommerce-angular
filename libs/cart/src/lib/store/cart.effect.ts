import { exhaustMap, map } from "rxjs";
import { cartActions } from "./cart.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";




export const loadCart = createEffect(
    (actions$ = inject(Actions), productService = inject(ProductService)) => {
      return actions$.pipe(
        ofType(cartActions.loadCart),
        exhaustMap(() =>
          productService.getProducts().pipe(
            map((products) =>
              cartActions.cartSuccess({ products })
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