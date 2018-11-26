import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  userName:string;
  constructor(private router:Router) { }

  ngOnInit() {
    let userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
    this.userName=userInfo.userName;
  }
  
  fnLogout(){
    sessionStorage.clear();
    document.cookie =  'pwd=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.router.navigateByUrl('login');
  }
}
