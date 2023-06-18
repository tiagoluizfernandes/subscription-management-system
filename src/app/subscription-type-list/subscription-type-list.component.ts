import { Component } from '@angular/core';
import { SubscriptionType } from '../subscription-type/subscription-type';

@Component({
  selector: 'app-subscription-type-list',
  templateUrl: './subscription-type-list.component.html',
  styleUrls: ['./subscription-type-list.component.css']
})
export class SubscriptionTypeListComponent {
  subscriptionTypes: SubscriptionType[] = [
    new SubscriptionType(1, 'Standard'),
    new SubscriptionType(2, 'Premium'),
    new SubscriptionType(3, 'Enterprise')
  ];

  selectedSubscriptionType: SubscriptionType = new SubscriptionType();

  openModal(subscriptionType: SubscriptionType ) {
    const modalElement = document.getElementById('subscriptionTypeForm');
    modalElement?.classList.add('show');
    modalElement?.setAttribute('style', 'display: block');
    this.selectedSubscriptionType = subscriptionType;
  }
  
  addSubscriptionType(): void {
        
    const addSubscriptionType = new SubscriptionType();    
    this.openModal(addSubscriptionType);

    //this.subscriptionTypes.push(createSubscriptionType);
    //this.selectedSubscriptionType = createSubscriptionType;

  }

  editSubscriptionType(subscriptionType: SubscriptionType): void {
    const editSubscriptionType = subscriptionType;        
    this.openModal(editSubscriptionType);
  }

  deleteSubscriptionType(subscriptionType: SubscriptionType): void {
    const index = this.subscriptionTypes.indexOf(subscriptionType);
    if (index !== -1) {
      this.subscriptionTypes.splice(index, 1);
      this.selectedSubscriptionType = new SubscriptionType();
    }else{
      alert('Subscription type not found in list');
    }
  }
}
