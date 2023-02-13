import { BikeTypeService } from './../bike-type.service';
import { BikeTypeComponent } from './../bike-type.component';
import { NgForm } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {
  @ViewChild('f') form!: NgForm
  biketype!:string;
  constructor(private route:ActivatedRoute,private bikeTypeService:BikeTypeService,private router:Router){}
  ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{this.biketype=params['name']})
  }
  onSubmit(){    
    console.log("form data" , this.form.value);    
    const newName = this.form.value.biketype;
    this.bikeTypeService.editType(this.route.snapshot.params['name'],newName);

    this.bikeTypeService.getTypes();
    this.router.navigate(['biketype','add'])
  }
}
