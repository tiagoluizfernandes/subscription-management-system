import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SubscriptionType } from '../subscription-type/subscription-type';

@Component({
  selector: 'app-subscription-type-form',
  templateUrl: './subscription-type-form.component.html',
  styleUrls: ['./subscription-type-form.component.css']
})
export class SubscriptionTypeFormComponent {
  @Input()
  selectedSubscriptionType!: SubscriptionType;
  

  
  closeModal() {
    const modalElement = document.getElementById('subscriptionTypeForm');
    modalElement?.classList.remove('show');
    modalElement?.setAttribute('style', 'display: none');

   

  }

}
