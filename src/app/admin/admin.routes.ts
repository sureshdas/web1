import {Routes,RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {HomeComponent} from './home/home.component';
import {VendorListComponent} from './vendor-list/vendor-list.component'
import {EditVendorComponent} from './edit-vendor/edit-vendor.component'
import {ChangePwdComponent} from '../shared/components/change-pwd/change-pwd.component'
import {RegisterComponent} from '../shared/components/register/register.component';
const routes:Routes=[
    {
        path:'',
        component:AdminComponent,
        children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'home',component:HomeComponent},
            {path:'vendor',component:RegisterComponent},
            {path:'vendorList',component:VendorListComponent},
            {path:'cpwd',component:ChangePwdComponent},
            {path:'editVendor',component:EditVendorComponent}
        ]
    }
]

export const adminRouting=RouterModule.forChild(routes);