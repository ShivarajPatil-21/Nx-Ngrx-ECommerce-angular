import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {CartState,cartReducer} from './cart.reducer';


const cartFeatureKey = 'cart';

export const selectCartState =createFeatureSelector<CartState>(cartFeatureKey)

export const selectCart = createSelector(
   selectCartState,
   (state)=>state.cart
);
//when we want to get specific products then we come to the end as selecter is the end
// export const selectProductsByCategory = (category:string) =>
//    createSelector(selectProductState, (state)=>state.products.filter((product)=> 
//    product.category === category)
// );
export const selectError = createSelector(
   selectCartState,
   (state)=> state.error
);

export const cartFeature = createFeature({
   name: cartFeatureKey,
   reducer: cartReducer,
});