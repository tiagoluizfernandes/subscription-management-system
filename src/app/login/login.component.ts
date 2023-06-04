import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login successful');
      // Perform any desired action (e.g., navigate to a different page)
    } else {
      console.log('Invalid username or password');
      // Show an error message
    }
  }
}