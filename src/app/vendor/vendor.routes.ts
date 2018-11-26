import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VendorComponent} from './vendor.component';
import {AddProductComponent} from './add-product/add-product.component'
import {ViewProductsComponent} from './view-products/view-products.component'
import {ChangePwdComponent} from '../shared/components/change-pwd/change-pwd.component'
const routes:Routes=[
    {
        path:'',
        component:VendorComponent,
        children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'addProduct',component:AddProductComponent},
            {path:'cpwd',component:ChangePwdComponent},
            {path:'viewProducts',component:ViewProductsComponent}
        ]
    }
]

export const vendorRouting=RouterModule.forChild(routes);

export const adminRouting=RouterModule.forChild(routes);