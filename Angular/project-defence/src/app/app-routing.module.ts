import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './interfaces/catalog/catalog.component';
import { HomeViewComponent } from './interfaces/home-view/home-view.component';
import { LoginComponent } from './interfaces/login/login.component';
import { RegisterComponent } from './interfaces/register/register.component';

const routes: Routes = [
  {path:'', component: HomeViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'catalog', component: CatalogComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
