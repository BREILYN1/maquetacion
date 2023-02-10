import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { leadingComment } from '@angular/compiler';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'sing up',
    component: SingUpComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule], 
})
export class AppRoutingModule { }


// {
//   path: '',
//   component: LayoutComponent,
//   children: [
//     {
//       path: 'home',
//       component: HomeComponent,
//     },
//     {
//       path: 'blog',
//       component: BlogComponent,
//     },
//     {
//       path: 'contact',
//       component: ContactComponent,
//     },
//     {
//       path: 'profile',
//       component: ProfileComponent,
//       canActivate: [AuthGuard],
//     },
//     {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full',
//     },
//   ],
// }