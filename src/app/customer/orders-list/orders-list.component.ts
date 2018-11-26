import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../../shared/services/server-call.service'
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders:any=[];
  constructor(private serverCall:ServerCallService) { }

  ngOnInit() {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    let query={
      'userName':userInfo.userName
    }
    this.serverCall.post('products/ordersList', {'query':query}, (res) => {
      if(res){
        this.orders = res.orders;
      }
    }, (error) => {
      this.orders = [];
    });
  }

}
