import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, SearchFormComponent, BookDetailComponent, LoginPageComponent, NavigationBarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatInputModule, MatCardModule, MatButtonModule,
    MatIconModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
