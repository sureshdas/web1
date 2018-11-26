import {Routes,RouterModule} from '@angular/router';
import {CartViewComponent} from './cart-view/cart-view.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SuccessComponent} from './success/success.component';
import {CustomerComponent} from './customer.component'
import {ChangePwdComponent} from '../shared/components/change-pwd/change-pwd.component'
const routes:Routes=[
    {
        path:'',
        component:CustomerComponent,
        children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'products',component:ProductsComponent},
            {path:'orders',component:OrdersListComponent},
            {path:'cart',component:CartViewComponent},
            {path:'profile',component:ProfileComponent},
            {path:'productView',component:ProductViewComponent},
            {path:'success',component:SuccessComponent},
            {path:'cpwd',component:ChangePwdComponent}
        ]
    }
]

export const customerRouting=RouterModule.forChild(routes);
