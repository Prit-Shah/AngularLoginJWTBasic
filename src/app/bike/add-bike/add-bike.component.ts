import { BikeService } from './../bike.service';
import { BikeTypeService } from './../../bike-type/bike-type.service';
import { BikeType } from './../../bike-type/BikeType.interface';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {
  @ViewChild('f') form!:NgForm;
  types!:BikeType[];
  file!:File;
  constructor(private bikeTypeService:BikeTypeService,private bikeService:BikeService){}
  ngOnInit(){
     this.bikeTypeService.types.subscribe(data=>this.types=data);
  }
  fileChange(event:any){
    this.file = event.target.files[0];
  }
  onAdd(){
    const formData = new FormData();
    console.log(this.form.value);
    formData.append('name',this.form.value.bname);
    formData.append('typeID',this.form.value.btype);
    formData.append('photo',this.file)
    this.bikeService.addBike(formData);   
  }
}
