import { BikeTypeService } from './bike-type.service';
import { AuthService } from './../Auth/Authuser.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BikeTypeRoutingModule } from './biketype-routing.module';
import { RouterModule } from '@angular/router';
import { BikeTypeComponent } from './bike-type.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTypeComponent } from './add-type/add-type.component';
import { DispTypeComponent } from './disp-type/disp-type.component';
import { EditTypeComponent } from './edit-type/edit-type.component';

@NgModule({
  declarations: [
    BikeTypeComponent,
    AddTypeComponent,
    DispTypeComponent,
    EditTypeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BikeTypeRoutingModule,
    HttpClientModule
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthService,
    multi:true
  },
BikeTypeService],
  bootstrap:[BikeTypeComponent],
  exports:[RouterModule]
})
export class BikeTypeModule { }
