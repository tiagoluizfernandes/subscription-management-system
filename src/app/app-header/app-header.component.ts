import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit{
  authenticatedUser: any;

  constructor(
    private loginService: LoginService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit() {
    this.authenticatedUser = this.sessionStorageService.getItem('username');
  }

  isAuthenticated() {
    return this.loginService.getAuthenticated();
  }

  logout() {
    this.loginService.unauthenticate();
  }
}
