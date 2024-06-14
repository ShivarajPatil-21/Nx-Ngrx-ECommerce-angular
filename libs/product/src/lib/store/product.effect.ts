import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { productActions } from './product.action';
import { ProductService } from '../product.service';

//this effect is in funtional part
export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap(() =>
        productService.getProducts().pipe(
          map((products) =>{
            console.log(products)
            return productActions.productSuccess({ products })
          }
          ),
          catchError((error) =>
            of(productActions.productFailure({ error }))
          )  
        )
      )
    );
 
  },
  { functional: true }
);

export const loadProductsByCategory = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProductByCategory),
      exhaustMap((action) =>
        //from where is action.category value coming in??
        productService.getProductByCategory(action.category).pipe( 
          map((products) =>
            productActions.productSuccess({ products })
          ),
          catchError((error) =>
            of(productActions.productFailure({ error }))
          )
        )
      )
    );
 
  },
  { functional: true }
);
