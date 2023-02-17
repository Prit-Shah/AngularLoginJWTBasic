import { BikeType } from './BikeType.interface';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class BikeTypeService{
    types = new Subject<BikeType[]>();
    isLoading = new Subject<boolean>();
    constructor(private http:HttpClient){
        this.getTypes();
    }    
    addType(name:string){
        this.http.post('https://bike-task.onrender.com/bikeType',{'name':name}).subscribe((out)=>{console.log(out);this.getTypes();});
    }    
    getTypes(){
        this.isLoading.next(true);
        this.http.get<BikeType[]>('https://bike-task.onrender.com/bikeType').subscribe(out=>{this.types.next(out);this.isLoading.next(false);});
    }
    editType(name:string,newName:string){
        return this.http.patch(`https://bike-task.onrender.com/bikeType/${name}`,{name:newName}).subscribe(out=>this.getTypes());
    }
}