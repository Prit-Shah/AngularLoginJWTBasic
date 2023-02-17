import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-bike-type',
  templateUrl: './bike-type.component.html',
  styleUrls: ['./bike-type.component.css']
})
export class BikeTypeComponent implements AfterViewChecked {
  constructor(private userService:UserService,private router:Router){}
    ngAfterViewChecked(): void {
      if(!this.userService.checkUser()){
        this.router.navigate(['login']);
      } 
    }
} 
