import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from '../authenticate-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private router: Router,  private authenticationService: AuthenticationService) {
  }

  canActivate() {
    if(this.authenticationService.isLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuardService implements CanActivate {
  constructor(private router: Router,  private authenticationService: AuthenticationService) {
  }

  canActivate() {
    if(!this.authenticationService.isLogged()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
