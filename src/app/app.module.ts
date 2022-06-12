import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CityListGroupComponent } from './components/city/city-list-group/city-list-group.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';
import { HomeComponent } from './components/home/home.component';
import { PostLastFiveComponent } from './components/post/post-last-five/post-last-five.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import {
  DxButtonModule,
  DxFormModule,
  DxLoadIndicatorModule,
  DxNumberBoxModule,
  DxValidatorModule,
  DxToolbarModule,
  DxDataGridModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import { PostAllComponent } from './components/post/post-all/post-all.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { PostAddComponent } from './components/post/post-add/post-add.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AccountMainComponent } from './components/auth/account/account-main/account-main.component';
import { AccountPostComponent } from './components/auth/account/account-post/account-post.component';
import { AccountInfoComponent } from './components/auth/account/account-info/account-info.component';
import { GlobalErrorHandler } from './components/shared/Error/globalErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CityListGroupComponent,
    SearchAreaComponent,
    HomeComponent,
    PostLastFiveComponent,
    LoginComponent,
    RegisterComponent,
    PostAllComponent,
    PostDetailComponent,
    CommentListComponent,
    PostAddComponent,
    AccountMainComponent,
    AccountPostComponent,
    AccountInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    CommonModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      },
    }),

    DxButtonModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxNumberBoxModule,
    DxValidatorModule,
    DxToolbarModule,
    DxDataGridModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
