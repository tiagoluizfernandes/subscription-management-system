import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authenticated: boolean = true;

  getAuthenticated(): boolean {
    return this.authenticated;
  }

  setAuthenticated(authenticated: boolean): void {
    this.authenticated = authenticated;
  }
}