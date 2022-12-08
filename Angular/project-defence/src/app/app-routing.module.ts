import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './interfaces/home-view/home-view.component';
import { LoginComponent } from './interfaces/login/login.component';

const routes: Routes = [
  {path:'', component: HomeViewComponent},
  {path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
