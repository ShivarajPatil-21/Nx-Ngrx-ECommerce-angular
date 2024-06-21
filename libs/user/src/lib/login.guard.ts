import { CanMatchFn, Router } from "@angular/router"
import { LoginService } from "./store/login.service";
import { inject } from "@angular/core";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authGuard: CanMatchFn = (route,segments) =>{
    const isLoggedIn = inject(LoginService).isLoggedIn;
    const router = inject(Router);
    if(isLoggedIn){
        return true;
    }else{ 
        return router.navigate(['/login']);
    }

}