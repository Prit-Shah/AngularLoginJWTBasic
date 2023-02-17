import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { BikeComponent } from './bike.component';
import { LoginCheck } from './../guards/loginCheck.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [{path:'bike',component:BikeComponent ,canActivate:[LoginCheck],
children:[
  {path:'',redirectTo:'/bike/add',pathMatch:'full'},
  {path:'add',component:AddBikeComponent , canActivate:[LoginCheck]},
  {path:'edit/:id',component:EditBikeComponent , canActivate:[LoginCheck]}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeRoutingModule { }