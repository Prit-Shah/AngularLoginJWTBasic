import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { BikeService } from './../bike.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-bike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router,private bikeService:BikeService){}
  @ViewChild('f') form!:NgForm;
  bname:string ="";
  _id:string="";
  ngOnInit(): void {
      this.bikeService.bike.subscribe(data=>{console.log(data); this.bname =  data.name});          
      this.route.params.subscribe((param:Params)=>{this.bikeService.getEditBike(param['id'])})
  }
  onEdit(){
    this.bikeService.editBike(this.form,this.route.snapshot.params['id']);    
    this.router.navigate(['bike']);
  }
}
