import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RegisterComponent} from '../../components/register/register.component'
import {FormsModule} from '@angular/forms'
import {TableComponent} from '../../components/table/table.component';
import {ChangePwdComponent} from '../../components/change-pwd/change-pwd.component'
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon"; 
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    RegisterComponent,
    FormsModule,
    TableComponent,
    ChangePwdComponent,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [RegisterComponent,TableComponent,ChangePwdComponent]
})
export class MyOwnMaterialModule { }
