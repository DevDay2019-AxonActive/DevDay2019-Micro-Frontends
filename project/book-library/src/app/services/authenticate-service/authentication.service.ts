import { Injectable } from '@angular/core';
import { User } from 'src/app/models/book.model';

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

  storeUser(user: User) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  getUser() : User {
    return JSON.parse(localStorage.getItem(USER));
  }

  removeUser() {
    localStorage.removeItem(USER);
  }
}
