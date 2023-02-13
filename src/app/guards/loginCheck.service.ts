import { UserService } from './../user/user.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class LoginCheck implements CanActivate {
  constructor(private currentUser: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      if(this.currentUser.checkUser()) return true;
      else this.router.navigate(['unauthorized']);
      return false;
}
}