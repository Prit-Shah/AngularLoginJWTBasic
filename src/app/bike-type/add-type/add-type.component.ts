import { BikeTypeService } from './../bike-type.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit{
  @ViewChild('f') form!:NgForm
  
  constructor(private bikeTypeService:BikeTypeService){}
  ngOnInit(): void {
      this.bikeTypeService.getTypes();
  }
  onSubmit(){    
    console.log("form data" , this.form.value);    
    const name = this.form.value.biketype;
    this.bikeTypeService.addType(name);
  }
}
