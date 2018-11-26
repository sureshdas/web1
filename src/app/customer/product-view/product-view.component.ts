import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service'
import {ServerCallService} from '../../shared/services/server-call.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productDet:any={};
  isShow:boolean=false;
  dateTime:any=new Date().getTime();
  constructor(private router:Router,private serverCall:ServerCallService,private shared:SharedService) {
      this.shared.fnSetProductInfoSubscribe((productDet)=>{
          this.productDet=productDet;
          this.isShow=true;
      })
   }

  ngOnInit() {
    
  }

  fnAddToCart(){
    let userInfo=JSON.parse(sessionStorage.getItem('userInfo'));

    this.productDet.customer=userInfo.userName;
    this.serverCall.post('products/addToCart',{'data':this.productDet},(res)=>{
      debugger;
      if(res.ok==1){
        this.router.navigateByUrl('customer/products');
        this.shared.fnSetMessage({
          'msg':'Product Added to Cart',
          'bg':'green'
        })
      }else{
        if(res.errmsg.indexOf('duplicate')> -1){
          this.shared.fnSetMessage({
            'msg':'Product alreay added to Cart',
            'bg':'red'
          })
        }
      }
    },(res)=>{
      this.shared.fnSetMessage({
        'msg':'Something went wrong',
        'bg':'red'
      });
    })
  }

  fnBuyNow() {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    let query = { 'userName': userInfo.userName }
    let dataObj = {
      'query': query,
      'product': this.productDet
    }
    this.serverCall.post('products/orderProduct', dataObj, (res) => {
      if(res.ok==1){
        this.shared.fnSetMessage({
          'msg': 'Your order placed successfully',
          'bg': 'green'
        });
        this.router.navigateByUrl('customer/success');
      }
    }, (res) => {
       this.shared.fnSetMessage({
          'msg': 'Something went wrong',
          'bg': 'red'
        });
    });
  }

}
