import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AccountMainComponent } from './components/auth/account/account-main/account-main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PostAddComponent } from './components/post/post-add/post-add.component';
import { PostAllComponent } from './components/post/post-all/post-all.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts-all', component: PostAllComponent },
  { path: 'posts', component: PostAllComponent },
  { path: 'posts/:plateNo', component: PostAllComponent },
  { path: 'posts-detail/:id', component: PostDetailComponent },
  { path: 'post-add', component: PostAddComponent },
  { path: 'account', component: AccountMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
