import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../../shared/services/server-call.service'
import {Router} from '@angular/router'
import {SharedService} from '../../shared/services/shared.service'
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  headers:any=['USER NAME', 'PASSWORD', 'PHONE','EMAIL'];
  keys:any=['userName','password','phone','email'];
  data:any=[];
  constructor(private shared:SharedService,private router:Router,private serverCall:ServerCallService) { }

  ngOnInit() {
      this.fnGetUsers();
  }
  fnGetUsers(){
    this.serverCall.post('users/getUsers',{'query':{'role':'vendor'}},
    (res)=>{
      this.data=res;
    },
    (error)=>{
      this.data=[];
    }
  )
  }

  fnVendorEdit(rowData){
    let _ele:HTMLElement=document.querySelector('.menu > a:nth-child(2)')
    _ele.click();
    //this.router.navigateByUrl('admin/vendor');
    setTimeout(()=>{
    this.shared.fnSetUserInfo(rowData);
    },1000)
  }


fnVendorDelete(rowData){
  debugger;
  var isDelete=confirm('Do you want me to delete');
  if(isDelete){
     this.serverCall.post('users/deleteuser',rowData,(res)=>{
      if(res.ok == 1){ 
        this.fnGetUsers();
        this.shared.fnSetMessage({
          'msg':'Deleted Successfully',
          'bg':'green'
        })
      }else{
        this.shared.fnSetMessage({
          'msg':'somethig went wroing',
          'bg':'red'
        })
      }
     },
     (error)=>{
      this.shared.fnSetMessage({
        'msg':'somethig went wroing',
        'bg':'red'
      })
     });
  }
}
 

}
