import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState,productReducer} from './product.reducer';


const productFeatureKey = 'product';

export const selectProductState =createFeatureSelector<ProductState>(productFeatureKey)

export const selectCategories = createSelector(
   selectProductState,
   (state)=>state.products
);
export const selectError = createSelector(
    selectProductState,
   (state)=> state.error
);

export const categoryFeature = createFeature({
   name: productFeatureKey,
   reducer: productReducer,
});