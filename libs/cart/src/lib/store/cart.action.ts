import {createActionGroup, emptyProps,props} from '@ngrx/store';


export interface Cart{
    id:number;
    userId: number;
    data: Date;
    product:[
        {
            productId:number;
            quantity:number;
        }
    ];

}

export const cartActions =  createActionGroup({
    source:'Cart',
    events:{
        loadCart: emptyProps(),
        cartSuccess: props<{products:Cart[]}>(),
        cartFailure:props<{error: string}>(),
    },
});
