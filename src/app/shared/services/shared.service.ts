import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private msg=new Subject<any>();
  private userInfo=new Subject<any>();
  private productInfo=new Subject();
  private productsList=new Subject();
  constructor() { }

  fnSetMessage(data){
    this.msg.next(data);
  }

  fnSetProductsList(data){
    this.productsList.next(data);
  }


  fnSetProductsListSub(cb){
    this.productsList.subscribe(cb);
  }

  fnSubMsgCB(cb){
      this.msg.subscribe(cb);
  }

  fnSetUserInfo(userInfo){
    this.userInfo.next(userInfo);
  }

  fnSetUserInfoScr(cb){
    this.userInfo.subscribe(cb);
  }

  fnSetProductInfo(data){
    this.productInfo.next(data);
  }

  fnSetProductInfoSubscribe(cb){
    this.productInfo.subscribe(cb);
  }

}
