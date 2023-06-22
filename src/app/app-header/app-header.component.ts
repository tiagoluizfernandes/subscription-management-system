import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  constructor(private loginService: LoginService) {}

  isLoggedIn() {
    return this.loginService.getAuthenticated();
  }

  logout() {
    this.loginService.setAuthenticated(false);
  }

}
