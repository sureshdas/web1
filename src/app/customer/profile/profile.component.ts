import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {ServerCallService} from '../../shared/services/server-call.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEdit:boolean=false;
  userInfo:any={};
  constructor(private shared:SharedService,private serverCall:ServerCallService) { }

  ngOnInit() {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }

  fnUPdate(){
    this.serverCall.post('users/updateUser',this.userInfo,(res)=>{
      if(res.nModified == 1){
        this.isEdit=false;
        this.shared.fnSetMessage({
          'msg':'Updated Successfully',
          'bg':'green'
        })
        sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo));
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

}
