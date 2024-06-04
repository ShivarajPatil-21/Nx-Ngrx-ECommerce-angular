import {createReducer,on} from '@ngrx/store';
import {
categoryActionsSuccess,
categoryActionsFailure
} from './category.action'; 

export interface CategoryState{
    categories: string[];
    currentCategory: string;
    error: string;
}

const initialState: CategoryState = {
    categories: [],
    currentCategory: '',
    error: ''
}

export const categoryReducer = createReducer(
    initialState,
    on(categoryActionsSuccess, (state, action)=>{
        return{
            ...state,
            categories: action.categories,
        };
    }),
     on(categoryActionsFailure, (state, action)=>{
        return{
            ...state,
            error:action.error,
        };
     })
)

