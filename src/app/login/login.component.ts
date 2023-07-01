import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginError: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionStorageService: SessionStorageService
  ) {}

  login() {
    this.loginError = false;

    const authenticated = this.sessionStorageService.get('authenticated');

    if(authenticated){
      this.router.navigate(['/home']);
    }else{

      if ( (this.username === 'admin' && this.password === 'admin' || (this.username === 'user' && this.password === 'user'))) {
        console.log('Login successful');
        this.loginService.authenticate(this.username,true);

        this.router.navigate(['/home']);
      } else {
        this.loginError = true;
        console.log('Invalid username or password');
      }
    }
  }
}
