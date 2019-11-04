import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLogged() : boolean {
    if(1 == 1) {
      return true;
    }
    return false;
  }
}
