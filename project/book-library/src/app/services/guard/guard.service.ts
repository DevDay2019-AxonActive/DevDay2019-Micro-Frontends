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
    // TODO: AuthenticationService
    // if(this.authenticationService.isAuthenticated()) {
    //   if (this.authenticationService.isAuthorized(Constants.ADMIN_ROLE.MASTER) ||
    //       this.authenticationService.isAuthorized(Constants.ADMIN_ROLE.ASSISTANT)) {
    //     return true;
    //   }

    //   return false;
    // }

    this.router.navigate(['/login']);
    return false;

    //return true;
  }
}
