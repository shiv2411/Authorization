// import { AuthHttp, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendProvider } from './fake-backend';

import { FormsModule } from '@angular/forms';
import { Http, BaseRequestOptions, HttpModule} from '@angular/http';
// import {  } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoaccessComponent } from './noaccess/noaccess.component';
import { RouterModule } from '@angular/router';
import { OrderService } from './order.service';
import { AuthService } from './auth.service';
import { AuthguardService } from './authguard.service';
import { AdminAuthguardService } from './admin-authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    NoaccessComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthguardService, AdminAuthguardService]},
    {path: 'login', component: LoginComponent},
    {path: 'no-access', component: NoaccessComponent}
    ])
  ],
  providers: [

    AdminAuthguardService,
    AuthguardService,

  OrderService,
  AuthService,

  // For creating a mock back-end
  fakeBackendProvider,
  MockBackend,
  BaseRequestOptions


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
