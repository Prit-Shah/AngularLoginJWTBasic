import { HttpClient } from '@angular/common/http';
import { BikeService } from './../bike.service';
import { Bike } from './../bike.interface';
import { Component, OnInit } from '@angular/core';
import { buffer } from 'rxjs';
import * as fs from 'fs'
import { state, trigger, style, transition } from '@angular/animations';

@Component({
  selector: 'app-disp-bike',
  templateUrl: './disp-bike.component.html',
  styleUrls: ['./disp-bike.component.css'],
  animations:[
    trigger('cardanimate',
    [
        state('edit',style({'background-color':'red','transform':'translateX(100px)'})),
        transition('normal => edit',[style({'background-color':'yellow','transform':'translateX(200px)'})])    
  ])
  ]
})
export class DispBikeComponent implements OnInit{
  isLoading!:boolean;
  state:string = "normal";
  bikes!:Bike[];
  constructor(private bikeService:BikeService,public http:HttpClient){}
  ngOnInit(){
    this.isLoading=true;   
    this.bikeService.getBikes();
    this.bikeService.bikes.subscribe(data=>{this.bikes=data;this.isLoading=false;console.log(data);
    })    
  }
  db(_id:string){
    // this.http.delete('https://bike-task.onrender.com/bike/'+_id).subscribe(data=>console.log(data));   
    this.bikeService.deleteBike(_id);
    // this.bikeService.bikes.subscribe(data=>{this.bikes=data;this.isLoading=false;console.log(data)});

  }
  changeState(){
    this.state='edit';
  }
}
