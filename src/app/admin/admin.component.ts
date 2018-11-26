import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuPath:string;
  constructor(private router:Router,private _actRoute:ActivatedRoute) { }

  ngOnInit() {
    debugger;
    this.menuPath=window.location.hash;
  }

  fnLogout(){
    sessionStorage.clear();
    document.cookie =  'pwd=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.router.navigateByUrl('login');
  }

}
