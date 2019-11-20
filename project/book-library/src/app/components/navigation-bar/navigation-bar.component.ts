import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/book.model';
import {AuthenticationService} from '../../modules/authentication';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.user = authenticationService.getUser();
  }

  logout() {
    this.authenticationService.removeUser();
    this.router.navigateByUrl('/login');
  }
}
