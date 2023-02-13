import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {} from "@angular/forms"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private http:HttpClient){}
  @ViewChild('f') form!:NgForm;
  
  onSubmit(){
    const {uemail,uname,upass,uphone} = this.form.value;
    this.http.post('http://localhost:3001/user/signup',{
      email:uemail,
      name:uname,
      password:upass,
      phone:uphone
    }).subscribe(out=>console.log(out));
    
    console.log(this.form.value)
  }
}
