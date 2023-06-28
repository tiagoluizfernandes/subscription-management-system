import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css'],
})
export class AboutDetailComponent {
  @Input() aboutText: string = '';
  @Output() messageSent = new EventEmitter<void>();

  sendMessage() {
    // Emit the messageSent event
    this.messageSent.emit();
  }
}
