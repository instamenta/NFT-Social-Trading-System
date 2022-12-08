import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeViewComponent,
    LoginComponent,
    
  ]
})
export class InterfacesModule { }
