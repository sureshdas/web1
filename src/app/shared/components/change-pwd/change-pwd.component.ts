import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ServerCallService } from '../../services/server-call.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  postData: any = {};
  constructor(private router: Router, private shared: SharedService, private serverCall: ServerCallService) { }

  ngOnInit() {
  }

  fnChangePwd() {
    let _currPwd = this.fnGetCurrPwd();
    if (_currPwd == this.postData['currentPwd']) {
      let userInfo = sessionStorage.getItem('userInfo');
      if (userInfo) {
        let userInfoObj = JSON.parse(userInfo);
        this.postData.userName = userInfoObj.userName;
      }
      this.serverCall.post('users/changePwd', this.postData, (res) => {
        debugger;
        if (res.nModified == 1) {
          this.shared.fnSetMessage({
            'msg': "Pwd changed successfully",
            'bg': 'green'
          })
          sessionStorage.clear();
          document.cookie = 'pwd=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          this.router.navigateByUrl('login');
        } else {
          this.shared.fnSetMessage({
            'msg': "Something went wrong",
            'bg': 'red'
          })
        }
      }, (res) => {
        debugger;
      })
    } else {
      this.shared.fnSetMessage({
        'msg': "Please check Currect Pwd",
        'bg': 'red'
      })
    }
  }

  fnGetCurrPwd() {
    let _cookies = document.cookie;
    let _cookieArr = _cookies.split(';');
    let pwdCookie = _cookieArr.find((v: any) => {
      let _cookieInfo = v.split('=');
      return _cookieInfo[0].trim() == 'pwd'
    });

    if (pwdCookie) {
      return atob(pwdCookie.split('=')[1])
    } else {

    }
  }

}
