import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';

import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersPageActions, UsersApiActions } from '../actions';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';
import { productActions } from './product.action';

export const loadUsers = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      mergeMap(() => {
        return usersService.getAll().pipe(
          map((users) => UsersApiActions.usersLoadedSuccess({ users })),
          catchError((error) =>
            of(UsersApiActions.usersLoadedFailure({ error }))
          )
        );
      })
    );
  },
  { functional: true }
);