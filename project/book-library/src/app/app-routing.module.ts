import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService, AnonymousGuardService } from './services/guard/guard.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [GuardService] },
  { path: 'detail/:bookId', component: BookDetailComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [AnonymousGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
