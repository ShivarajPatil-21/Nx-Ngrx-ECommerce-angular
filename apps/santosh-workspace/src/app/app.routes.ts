import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { cartFeature, loadCart } from '@org/cart';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { loadProducts, loadProductsByCategory, productFeature } from '@org/product';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { authGuard } from '@org/user'; 

export const appRoutes: Route[] = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path:'login',
        loadComponent:() => import('@org/user').then((m)=> m.LoginComponent)
    },
    { 
        path: 'product',
        loadComponent:() => import('@org/product').then((m)=>m.ProductComponent),
        providers:[provideState(productFeature),
                   provideEffects({loadProducts,loadProductsByCategory}),

        ],
        canMatch: [authGuard],
    },
    {
        path: 'product/:categoryName',
        loadComponent:() => import('@org/product').then((m)=>m.ProductComponent),
        providers:[provideState(productFeature),
                   provideEffects({loadProducts,loadProductsByCategory}),

        ],
        canMatch: [authGuard],
    },
    {
        path:'cart',
        loadComponent:() => import('@org/cart').then((m)=>m.CartComponent),
        providers:[provideState(cartFeature),
            provideEffects({loadCart}),
        ],
        canMatch: [authGuard],
    },
    {
        path:'profile',
        loadComponent:() => import('@org/user').then((m)=> m.ProfileComponent),
        // canMatch: [authGuard],
    }
];
  
