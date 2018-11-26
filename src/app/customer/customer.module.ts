import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SuccessComponent } from './success/success.component';
import {customerRouting} from './customer.routes';
import {MyOwnMaterialModule} from '../shared/modules/my-own-material/my-own-material.module'
@NgModule({
  imports: [
    CommonModule,
    customerRouting,
    MyOwnMaterialModule
  ],
  declarations: [CustomerComponent, HomeComponent, OrdersListComponent, ProductsComponent, SearchComponent, ProfileComponent, CartViewComponent, ProductViewComponent, SuccessComponent]
})
export class CustomerModule { }
