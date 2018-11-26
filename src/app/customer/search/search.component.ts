import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {ServerCallService} from '../../shared/services/server-call.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  totalProducts:any=[];
  searchText:string;
  filteredProducts:any=[];
  constructor(private shared:SharedService,private serverCall:ServerCallService) { }

  ngOnInit() {
    debugger;
    this.serverCall.get('products/getProducts',(res)=>{
      debugger;
      this.totalProducts=res;
      this.shared.fnSetProductsList(res);
    },(res)=>{
      this.shared.fnSetProductsList([]);
    })
  }

  fnProductSearch(){
       this.filteredProducts=this.totalProducts.filter((pObj)=>{
           return pObj.productName.includes(this.searchText)
       })

       this.shared.fnSetProductsList(this.filteredProducts);
  }

}
