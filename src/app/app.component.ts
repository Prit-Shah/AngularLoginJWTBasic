import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BikeTask';
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(){
    if(!this.userService.checkUser()){
      this.router.navigate(['login']);
    }    
  }  
}
