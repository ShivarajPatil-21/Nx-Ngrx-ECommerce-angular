import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { productActions } from './product.action';
import { ProductService } from '../product.service';

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap((action) =>
        productService.getProductByCategory('jewelery').pipe(
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
