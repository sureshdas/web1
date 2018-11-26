import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import {vendorRouting} from './vendor.routes'
import { FileSelectDirective } from 'ng2-file-upload';
import {MyOwnMaterialModule} from '../shared/modules/my-own-material/my-own-material.module'
@NgModule({
  imports: [
    CommonModule,
    vendorRouting,
    MyOwnMaterialModule
  ],
  declarations: [FileSelectDirective,VendorComponent, HomeComponent, AddProductComponent, ViewProductsComponent]
})
export class VendorModule { }
