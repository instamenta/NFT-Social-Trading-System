import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewComponent } from './home-view/home-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { PopularComponent } from './popular/popular.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeViewComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    DetailsComponent,
    PopularComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeViewComponent,
    LoginComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InterfacesModule { }
