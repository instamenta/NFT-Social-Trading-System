import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuardService } from './auth/guest-guard.service';
import { UserGuardService } from './auth/user-guard.service';
import { CatalogComponent } from './interfaces/catalog/catalog.component';
import { ChoosePicComponent } from './interfaces/choose-pic/choose-pic.component';
import { DetailsComponent } from './interfaces/details/details.component';
import { ErrorComponent } from './interfaces/error/error.component';
import { HomeViewComponent } from './interfaces/home-view/home-view.component';
import { LikedComponent } from './interfaces/liked/liked.component';
import { LoginComponent } from './interfaces/login/login.component';
import { LogoutComponent } from './interfaces/logout/logout.component';
import { OwnedComponent } from './interfaces/owned/owned.component';
import { PopularComponent } from './interfaces/popular/popular.component';
import { ProfileLitComponent } from './interfaces/profile-lit/profile-lit.component';
import { ProfileComponent } from './interfaces/profile/profile.component';
import { RegisterComponent } from './interfaces/register/register.component';

const routes: Routes = [
  {path:'', component: HomeViewComponent},
  {path: 'login', component: LoginComponent, canActivate:[GuestGuardService]},
  {path: 'register', component: RegisterComponent, canActivate:[GuestGuardService]},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/details/:id', component: DetailsComponent},
  {path: 'catalog/popular', component: PopularComponent},
  {path: 'profile/:id', component: ProfileComponent,},
  {path: '404', component: ErrorComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[UserGuardService]},
  {path: 'profile-list', component: ProfileLitComponent},
  {path: 'profile/:id/liked', component: LikedComponent},
  {path: 'profile/:id/owned', component: OwnedComponent},
  {path: 'profile/:id/choose-pic', component:ChoosePicComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
