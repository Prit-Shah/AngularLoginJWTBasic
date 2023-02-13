import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class BikeTypeService{
    types = new Subject<any>();
    constructor(private http:HttpClient){
        this.getTypes();
    }    
    addType(name:string){
        this.http.post('http://localhost:3001/bikeType',{'name':name}).subscribe((out)=>{console.log(out);this.getTypes();});
    }    
    getTypes():any{
        return this.http.get<any>('http://localhost:3001/bikeType').subscribe(out=>{this.types.next(out)});
    }
    editType(name:string,newName:string){
        return this.http.patch(`http://localhost:3001/bikeType/${name}`,{name:newName}).subscribe(out=>this.getTypes());
    }
}