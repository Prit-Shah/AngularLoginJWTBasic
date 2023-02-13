import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http:HttpClient,private userService:UserService){}
  @ViewChild('f') form!:NgForm
  onSubmit(){
    const {uemail,upass} = this.form.value;
    this.http.post<{token:string}>('http://localhost:3001/user/login',{    
      email:uemail,      
      password:upass,      
    }).subscribe(out=>{this.userService.setUser(out.token)});    
  }
}
