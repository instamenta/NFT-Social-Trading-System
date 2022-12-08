import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewComponent } from './home-view/home-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HomeViewComponent,
    LoginComponent,
    
  ]
})
export class InterfacesModule { }
