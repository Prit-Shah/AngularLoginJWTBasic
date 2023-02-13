import { LoginCheck } from './../guards/loginCheck.service';
import { CanActivate } from '@angular/router';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { BikeTypeComponent } from './bike-type.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddTypeComponent } from './add-type/add-type.component';
const routes: Routes = [{path:'biketype',component:BikeTypeComponent ,canActivate:[LoginCheck],
children:[
  {path:'',redirectTo:'/biketype/add',pathMatch:'full'},
  {path:'add',component:AddTypeComponent},
  {path:'edit/:name',component:EditTypeComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeTypeRoutingModule { }