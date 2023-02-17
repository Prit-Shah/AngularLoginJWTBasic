import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Bike } from './bike.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { NgFor } from '@angular/common';

@Injectable({providedIn:'root'})
export class BikeService implements OnInit{
    bikes = new Subject<Bike[]>();
    bike = new Subject<Bike>();
    constructor(private http:HttpClient){}
    ngOnInit(){          
        this.getBikes();   
    }
    getBikes(){
        this.http.get<Bike[]>('https://bike-task.onrender.com/bike').subscribe(data=>{this.bikes.next(data)})
    }
    addBike(form:FormData){
        this.http.post('https://bike-task.onrender.com/bike',form).subscribe(out=>{this.getBikes()});
        this.getBikes();
    }
    deleteBike(_id:string){    
            this.http.delete('https://bike-task.onrender.com/bike/'+_id).subscribe(data=>this.getBikes());                          
    }
    getEditBike(_id:string){
        this.http.get<Bike[]>('https://bike-task.onrender.com/bike/'+_id).subscribe(data=>{this.bike.next(data[0])})
    }
    editBike(form:NgForm,_id:string){
        this.http.patch('https://bike-task.onrender.com/bike/'+_id,{name:form.value.bname}).subscribe(out=>{this.getBikes()});
    }
}