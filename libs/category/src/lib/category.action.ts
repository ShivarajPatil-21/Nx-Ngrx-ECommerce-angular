
import { createAction} from '@ngrx/store';

export const getcategoriesActions = createAction('[Category] Get Category');

export const categoryActionsSuccess = createAction(
    '[Category] Get Category Success',
    (categories:string[])=>({categories})
);

export const categoryActionsFailure = createAction(
    '[Category] Get Category Failure',
    (error:string)=>({error})
);