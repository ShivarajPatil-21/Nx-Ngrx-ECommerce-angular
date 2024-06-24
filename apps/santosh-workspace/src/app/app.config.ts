import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { isDevMode } from '@angular/core';

import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffects, categoryFeature } from '@org/category';
import { provideStoreDevtools } from '@ngrx/store-devtools'; // to get routes into component

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ), //used to get parameter from the router//
    provideHttpClient(),
    provideAnimations(),
    provideStore(),
    provideState(categoryFeature),
    provideEffects([CategoryEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), //provide devtools//
    provideRouter(appRoutes),
  ],
};
