import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  aboutText: string = 'Welcome to our website!';

  handleMessageSent() {
    console.log('Message sent from AboutPage');
  }
}
