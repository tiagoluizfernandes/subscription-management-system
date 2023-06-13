import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription-type-form',
  templateUrl: './subscription-type-form.component.html',
  styleUrls: ['./subscription-type-form.component.css']
})
export class SubscriptionTypeFormComponent {

  closeModal() {
    const modalElement = document.getElementById('subscriptionTypeForm');
    modalElement?.classList.remove('show');
    modalElement?.setAttribute('style', 'display: none');
  }

}
