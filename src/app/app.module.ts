import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MessageComponent } from './shared/components/message/message.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {appRoutes} from './app.routes';
//import { MenuClickDirective } from './shared/directives/menu-click.directive'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs'; 
import {MyOwnMaterialModule} from './shared/modules/my-own-material/my-own-material.module'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    //MenuClickDirective
  ],
  imports: [
    BrowserModule,
    appRoutes,
    BrowserAnimationsModule,
    MyOwnMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
