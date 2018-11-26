import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../../services/server-call.service';
import {SharedService} from '../../services/shared.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  postData:any={};
  isSave:boolean=true;
  constructor(private router:Router,private shared:SharedService,private serverCall:ServerCallService) { 
    this.shared.fnSetUserInfoScr((userInfo)=>{
      debugger;
      this.postData=userInfo;
      this.isSave=false;
    })
  }
 
  fnRegister(){
     if(window.location.hash=="#/admin/vendor"){
        this.postData.role="vendor";
     }else{
       this.postData.role="customer";
       this.postData.orders=[]
     }
     this.serverCall.post('users/register',{'data':this.postData},
      (res)=>{
        debugger;
        if(res['ok'] ==1  && res['n']==1){
          this.postData={};
          let msgObj={
            'msg':'Registered Successfully',
            'bg':'green'
          }
          this.shared.fnSetMessage(msgObj);
        }
    },(error)=>{
      let msgObj={
        'msg':'something went wrong',
        'bg':'red'
      }
      this.shared.fnSetMessage(msgObj);
 
  })
}

fnEdit(){
   this.serverCall.post('users/updateUser',this.postData,(res)=>{
    debugger;

    if(res.nModified == 1){
      this.router.navigateByUrl('/admin/vendorList')
      this.shared.fnSetMessage({
        'msg':'Updated Successfully',
        'bg':'green'
      })
    }else{
      this.shared.fnSetMessage({
        'msg':'somethig went wroing',
        'bg':'red'
      })
    }
   },(error)=>{
    this.shared.fnSetMessage({
      'msg':'somethig went wroing',
      'bg':'red'
    })
   })
}

  ngOnInit() {

  }

}
