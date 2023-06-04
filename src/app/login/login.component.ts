import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful');
      
      // Perform any desired action (e.g., navigate to a different page)
      this.router.navigate(['/menu']); // Redireciona para o menu

    } else {
      console.log('Invalid username or password');
      // Show an error message
    }
  }
}