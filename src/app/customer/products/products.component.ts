import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  totalProducts:any=[];
  dispProducts:any=[];
  goToPageNo:number=1;
  currentPage:number=1;
  perPage:number=3;
  totalPages:number=1;
  dateTime:any=new Date().getTime();
  constructor(private router:Router,private shared:SharedService) {
    this.shared.fnSetProductsListSub((data)=>{
        this.totalProducts=data;
        this.totalPages=Math.ceil(this.totalProducts.length/this.perPage)
        this.dispProducts=this.totalProducts.slice(0,this.perPage);
    })
   }

  ngOnInit() {
  }

  fnGoTo(){
     this.currentPage=this.goToPageNo;
     this.prepareDispProducts();
  }
  fnPre(){
    --this.currentPage;
    this.prepareDispProducts();
  }
  fnNext(){
    ++this.currentPage;
    this.prepareDispProducts();
  }
  prepareDispProducts(){
    let end=this.perPage * this.currentPage;
    let start=end-this.perPage;
    this.dispProducts=this.totalProducts.slice(start,end);
  }

  fnProductView(productDet){
      this.router.navigateByUrl('customer/productView')
      debugger;
      setTimeout(()=>{
          this.shared.fnSetProductInfo(productDet)
      },500)
  }

}
