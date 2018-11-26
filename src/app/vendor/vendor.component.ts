import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  fnLogout(){
    sessionStorage.clear();
    document.cookie =  'pwd=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.router.navigateByUrl('login');
  }

}
