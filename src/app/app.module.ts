import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BikeTypeModule } from './bike-type/bike-type.module';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BikeTypeComponent } from './bike-type/bike-type.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './Auth/Authuser.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnauthorizedComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BikeTypeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
