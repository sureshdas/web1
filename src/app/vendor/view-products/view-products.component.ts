import { Component, OnInit } from '@angular/core';
import { ServerCallService } from '../../shared/services/server-call.service';
import { SharedService } from '../../shared/services/shared.service'
import { config } from 'rxjs/internal/config';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  keys: any = ['productName', 'productCost'];
  headers: any = ['Product Image', 'Product Name', 'Product Cost'];
  data: any = [];
  constructor(private shared: SharedService, private serverCall: ServerCallService) { }

  ngOnInit() {
    this.fnGetProducts();
  }


  fnGetProducts() {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    let query = {
      'vendorName': userInfo.userName
    }
    this.serverCall.post('products/getProducts', query, (res) => {
      this.data = res;
    }, (res) => {
      this.shared.fnSetMessage({
        'msg': 'Something went wrong',
        'bg': 'red'
      })
      this.data = [];
    })
  }

  fnProductDelete(rowData) {
    var isDelete = confirm('R U Sure to delete');
    if (isDelete) {
      this.serverCall.post('products/deleteProduct', rowData, (res) => {
        if(res && res.ok== 1){
        this.fnGetProducts();
        this.shared.fnSetMessage({
          'msg': 'Deleted Successfully',
          'bg': 'green'
        })
      }
      }, (res) => {
        this.shared.fnSetMessage({
          'msg': 'Something went wrong',
          'bg': 'red'
        })
      })
    }
  }



  fnProductEdit(rowData) {
    let _ele: HTMLElement = document.querySelector('.menu > a:nth-child(2)')
    _ele.click();
    setTimeout(() => {
      this.shared.fnSetProductInfo(rowData);
    }, 500)
  }





}
