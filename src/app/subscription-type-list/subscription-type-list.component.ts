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

  selectedSubscriptionType: SubscriptionType | null = null;

  addSubscriptionType(): void {
    const newId = this.subscriptionTypes.length + 1;
    const newSubscriptionType = new SubscriptionType(newId, '');
    this.subscriptionTypes.push(newSubscriptionType);
    this.selectedSubscriptionType = newSubscriptionType;
  }

  editSubscriptionType(subscriptionType: SubscriptionType): void {
    this.selectedSubscriptionType = subscriptionType;
  }

  deleteSubscriptionType(subscriptionType: SubscriptionType): void {
    const index = this.subscriptionTypes.indexOf(subscriptionType);
    if (index !== -1) {
      this.subscriptionTypes.splice(index, 1);
      this.selectedSubscriptionType = null;
    }
  }
}
