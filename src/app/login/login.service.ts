import { Injectable } from '@angular/core';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  
  constructor(private sessionStorageService: SessionStorageService) { }

  getAuthenticated(): boolean {
    return this.sessionStorageService.getItem('authenticated');
  }

  authenticate(username: string, authenticated: boolean): void {
    
    this.sessionStorageService.setItem('authenticated', authenticated);
    this.sessionStorageService.setItem('username', username);

  }

  unauthenticate(): void {    
    this.sessionStorageService.clear();
  }

}