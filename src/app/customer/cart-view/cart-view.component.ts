import { Component, OnInit } from '@angular/core';
import { ServerCallService } from '../../shared/services/server-call.service'
import { SharedService } from '../../shared/services/shared.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private router:Router,private shared: SharedService, private serverCall: ServerCallService) { }
  cartProducts: any = [];
  ngOnInit() {
    this.fnGetCart();
  }

  fnGetCart() {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    this.serverCall.post('products/viewCart', { 'customer': userInfo.userName }, (res) => {
      this.cartProducts = res;
    }, (res) => {
      this.cartProducts = [];
    });
  }
  fnRemoveCart(cartItem) {
    let isDelete = confirm('R U sure');
    if (isDelete) {
      this.serverCall.post('products/deleteCart', cartItem, (res) => {
        debugger;
        if (res.ok == 1) {
          this.fnGetCart();
          this.shared.fnSetMessage({
            'msg': 'Product removed from cart',
            'bg': 'green'
          })
        }
      }, (res) => {
        this.shared.fnSetMessage({
          'msg': 'Something went wrong',
          'bg': 'red'
        });
      })
    }

  }


  fnBuyNow(product) {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    let query = { 'userName': userInfo.userName }
    let dataObj = {
      'query': query,
      'product': product
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
