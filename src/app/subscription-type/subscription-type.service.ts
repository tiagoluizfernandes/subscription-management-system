import { Injectable } from '@angular/core';
import { SubscriptionType } from './subscription-type';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {
  private subscriptionTypes: SubscriptionType[] = [
    new SubscriptionType(1, 'Type A'),
    new SubscriptionType(2, 'Type B'),
    new SubscriptionType(3, 'Type C')
  ];

  getSubscriptionTypes(): SubscriptionType[] {
    return this.subscriptionTypes;
  }

  getSubscriptionType(id: number): SubscriptionType | undefined {
    return this.subscriptionTypes.find(st => st.id === id);
  }

  addSubscriptionType(subscriptionType: SubscriptionType) {

    let maxId = Math.max(...this.subscriptionTypes.map(st => st.id));

    if(maxId === -Infinity){
      maxId = 0;
    }

    subscriptionType.id = maxId + 1;

    this.subscriptionTypes.push(subscriptionType);
  }

  updateSubscriptionType(subscriptionType: SubscriptionType) {
    const index = this.subscriptionTypes.findIndex(st => st.id === subscriptionType.id);
    if (index !== -1) {
      this.subscriptionTypes[index] = subscriptionType;
    }
  }

  deleteSubscriptionType(subscriptionType: SubscriptionType) {
    const index = this.subscriptionTypes.indexOf(subscriptionType);
    if (index !== -1) {
      this.subscriptionTypes.splice(index, 1);
    }
  }
}