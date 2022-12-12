import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardService } from './auth/user-guard.service';
import { CatalogComponent } from './interfaces/catalog/catalog.component';
import { DetailsComponent } from './interfaces/details/details.component';
import { HomeViewComponent } from './interfaces/home-view/home-view.component';
import { LoginComponent } from './interfaces/login/login.component';
import { PopularComponent } from './interfaces/popular/popular.component';
import { ProfileComponent } from './interfaces/profile/profile.component';
import { RegisterComponent } from './interfaces/register/register.component';

const routes: Routes = [
  {path:'', component: HomeViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/details/:id', component: DetailsComponent},
  {path: 'catalog/popular', component: PopularComponent},
  {path: 'profile/:id', component: ProfileComponent, canActivate:[UserGuardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
