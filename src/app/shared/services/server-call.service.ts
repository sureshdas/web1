import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServerCallService {
  baseUrl:string="http://localhost:2020/"
  constructor(private _http:HttpClient) { }

  post(url,data,scb,ecb){
    let _ele:HTMLElement=document.getElementById('loader');
    _ele.className="loading";
   this._http.post(this.baseUrl+url,data)
   .subscribe((res)=>{
    _ele.className="";
    scb(res)
   },(error)=>{
    _ele.className="";
    ecb(error);
   })
   
  }

  get(url,scb,ecb){
    let _ele:HTMLElement=document.getElementById('loader');
    _ele.className="loading";
     this._http.get(this.baseUrl+url)
     .subscribe((res)=>{
      _ele.className="";
      scb(res)
     },(error)=>{
      _ele.className="";
      ecb(error);
     })
  }
}
