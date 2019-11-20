import {Injectable} from '@angular/core';
import {User} from 'src/app/models/book.model';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LoginIntegrationService} from '../http';
import {AuthenticationModule} from '../authentication.module';

const USER = 'USER';

@Injectable({
  providedIn: AuthenticationModule,
})
export class AuthenticationService {

  constructor(private loginIntegrationService: LoginIntegrationService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.loginIntegrationService.login(username, password).pipe(tap((user) => {
      if (user) {
        this.storeUser(user);
      }
    }));
  }

  isLogged(): boolean {
    if (localStorage.getItem(USER) != null) {
      return true;
    }
    return false;
  }

  private storeUser(user: User) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(USER));
  }

  removeUser() {
    localStorage.removeItem(USER);
  }
}
