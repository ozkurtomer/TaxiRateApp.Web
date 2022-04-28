import { NgModule } from '@angular/core';
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
} from 'devextreme-angular';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    DxButtonModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxNumberBoxModule,
    DxValidatorModule,
    DxToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
