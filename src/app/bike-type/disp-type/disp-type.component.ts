import { BikeTypeService } from './../bike-type.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disp-type',
  templateUrl: './disp-type.component.html',
  styleUrls: ['./disp-type.component.css']
})
export class DispTypeComponent implements OnInit {
  constructor(private bikeTypeService:BikeTypeService){}
  types!:[{_id:string,name:string,createdBy:{name:string},createdDate:Date}];
  ngOnInit(): void {
      this.bikeTypeService.types.subscribe(out=>{console.log(out);this.types=out});
  }
  
}
