import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  bg:string;
  isShow:boolean=false;
  msg:string;
  timerRef:any;
  constructor(public shared:SharedService) {
      shared.fnSubMsgCB((data)=>{
        debugger;
           this.bg=data.bg;
           this.msg=data.msg;
           this.isShow=true;
          this.timerRef= setTimeout(()=>{
              this.isShow=false;
           },15000);
      });
   }

  ngOnInit() {
  }

  fnClose(){
     this.isShow=false;
     clearTimeout(this.timerRef);
  }

}
