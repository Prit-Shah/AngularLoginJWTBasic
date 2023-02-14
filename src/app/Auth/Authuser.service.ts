import { UserService } from './../user/user.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable,take } from "rxjs";

@Injectable()
export class AuthService implements HttpInterceptor{
   constructor(private userService :UserService){      
   }
   request!:HttpRequest<any>;
   //for PR
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      
      let token:string | null = localStorage.getItem('user');
      if(token){  
      req = req.clone({
         setHeaders: {Authorization: `Bearer ${token}`},        
      });
   }     
       return next.handle(req);
   }    
}