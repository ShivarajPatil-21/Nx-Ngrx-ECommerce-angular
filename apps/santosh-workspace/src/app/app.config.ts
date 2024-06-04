import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore} from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import {CategoryEffects, categoryFeature } from '@org/category';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), 
    provideHttpClient(),
    provideAnimations(),
    provideStore(),
    provideState(categoryFeature),
    provideEffects([CategoryEffects]),],
    
};
