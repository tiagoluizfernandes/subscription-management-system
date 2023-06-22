import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginError: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    this.loginError = false; 
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful');
      this.loginService.setAuthenticated(true); // Set the login status in the login service
      
      // Perform any desired action (e.g., navigate to a different page)
      this.router.navigate(['/home']); // Redireciona para o menu

    } else {
      this.loginError = true; // Set the login error flag (to show error message)
      console.log('Invalid username or password');
      // Show an error message
    }
  }
}