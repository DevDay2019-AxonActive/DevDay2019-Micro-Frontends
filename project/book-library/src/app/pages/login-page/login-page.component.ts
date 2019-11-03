import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  username: string;
  password: string;
  constructor() { }

  login() : void {
    //   try {
    //   if(this.username && this.password){
    //     this.authService.login(this.username,this.password);
    //   }else {
    //     alert("Invalid credentials");
    //   }
    // } catch(error){
    //   console.log(error);
    // }
  }
}
