import { Injectable } from '@angular/core';

const USER_ID = 'USER_ID';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLogged() : boolean {
    if(localStorage.getItem(USER_ID) != null) {
      return true;
    }
    return false;
  }

  storeUser(user: string) {
    localStorage.setItem(USER_ID, user);
  }
}
