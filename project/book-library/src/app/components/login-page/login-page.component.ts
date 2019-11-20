import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../modules/authentication';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  username: string;
  password: string;
  message: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  login(): void {
    try {
      if (this.username && this.password) {
        this.authenticationService.login(this.username, this.password).subscribe(user => {
          if (user === undefined) {
            this.message = 'Invalid credentials';
          } else {
            this.router.navigateByUrl('/');
          }
        });
      } else {
        this.message = 'Please enter username and password';
      }
    } catch (error) {
      this.message = 'Can\'t validate';
      console.log(error);
    }
  }

  //reset the message when user changes username or password
  onChange(): void {
    this.message = undefined;
  }
}
