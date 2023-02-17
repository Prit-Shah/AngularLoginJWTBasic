import { BikeRoutingModule } from './bike-routing.module';
import { RouterModule } from '@angular/router';
import { BikeService } from './bike.service';
import { DispBikeComponent } from './disp-bike/disp-bike.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { BikeComponent } from './bike.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BikeTypeRoutingModule } from '../bike-type/biketype-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../Auth/Authuser.service';

@NgModule({
  declarations: [
    BikeComponent,
    AddBikeComponent,
    EditBikeComponent,
    DispBikeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,   
    BikeRoutingModule,
    HttpClientModule,
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthService,
      multi:true
    },
    BikeService
  ],
  bootstrap:[BikeComponent],
  exports:[RouterModule]

})
export class BikeModule { }
