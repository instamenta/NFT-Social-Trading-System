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
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileLitComponent } from './profile-lit/profile-lit.component';
import { LikedComponent } from './liked/liked.component';
import { OwnedComponent } from './owned/owned.component';
import { ChoosePicComponent } from './choose-pic/choose-pic.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    DetailsComponent,
    PopularComponent,
    ProfileComponent,
    ErrorComponent,
    LogoutComponent,
    ProfileLitComponent,
    LikedComponent,
    OwnedComponent,
    ChoosePicComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
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
