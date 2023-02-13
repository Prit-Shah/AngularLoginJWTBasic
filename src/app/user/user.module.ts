import { UserService } from './user.service';
import {  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    UserComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,    
    UserRoutingModule,
    FormsModule,
    HttpClientModule,  
  ],
  providers:[UserService],
  bootstrap:[UserComponent], 
  exports:[RouterModule]
})
export class UserModule { }
