import { Injectable } from '@angular/core';

const USER = 'USER';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLogged() : boolean {
    if(localStorage.getItem(USER) != null) {
      return true;
    }
    return false;
  }

  storeUser(user: string) {
    localStorage.setItem(USER, user);
  }
}
