import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit{
  loggedInUser: any;

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.loggedInUser = this.localStorageService.getItem('username');
  }

  isLoggedIn() {
    return this.loginService.getAuthenticated();
  }

  logout() {
    this.loginService.setAuthenticated(false);
  }
}
