import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service'
import { ServerCallService } from '../../services/server-call.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  postData: any = {};
  constructor(public router: Router, public shared: SharedService, public serverCall: ServerCallService) { }

  ngOnInit() {
  }

  fnLogin() {
    this.serverCall.post('users/login', { 'query': this.postData },
      (res) => {
        let userInfo = res[0];
        if (userInfo) {
          this.router.navigateByUrl(userInfo.role);
          document.cookie = "pwd="+btoa(userInfo.password);
          delete userInfo.password;
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

        } else {
          let msgObj = {
            'msg': 'Uid or pwd is wrong',
            'bg': 'red'
          }
          this.shared.fnSetMessage(msgObj);
        }
      }, (error) => {
        let msgObj = {
          'msg': 'something went wrong',
          'bg': 'red'
        }
        this.shared.fnSetMessage(msgObj);
      })
  }

}
