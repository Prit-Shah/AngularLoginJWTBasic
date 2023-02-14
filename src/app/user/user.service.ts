import {  Injectable, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable()
export class UserService{
    constructor(private router:Router){
        this.userEmitter = new Subject<string>();
    }
   private tokenTimeout!:NodeJS.Timeout;
    @Output() userEmitter!:Subject<string>;
    user!:string;
    setUser(token:string){
        localStorage.setItem('user',token);
        this.user=token;
       this.tokenTimeout = setTimeout(()=>{
        this.Logout();
    },1000*60*60)
    this.router.navigate(['biketype']);
}  
    checkUser(){
        return !!localStorage.getItem('user');
    }

    Logout(){
        clearTimeout(this.tokenTimeout);
        localStorage.removeItem('user');
        this.user = '';
        alert('Please Login Again!')
        this.router.navigate(['login']);
    }
}