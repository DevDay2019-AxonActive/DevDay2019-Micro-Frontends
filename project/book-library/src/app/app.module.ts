import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: "/login",
    component: LoginPageComponent
  }
]

@NgModule({
  declarations: [AppComponent, SearchFormComponent, LoginPageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatInputModule, MatCardModule, MatButtonModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
