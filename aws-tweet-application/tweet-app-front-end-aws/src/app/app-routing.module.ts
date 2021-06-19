import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllUsersPageComponent } from './pages/all-users-page/all-users-page.component';
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MyTweetsPageComponent } from './pages/my-tweets-page/my-tweets-page.component';
import { RegisterCardComponent } from './ui-components/register-card/register-card.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterCardComponent },
  { path: ' ', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'my-tweets', component: MyTweetsPageComponent, canActivate: [AuthGuard]},
  { path: 'all-users', component: AllUsersPageComponent, canActivate: [AuthGuard]},
  { path: 'change-password', component: ChangePasswordPageComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
