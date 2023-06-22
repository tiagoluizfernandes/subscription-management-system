import { Injectable } from '@angular/core';
import { SubscriptionItem } from './subscription-item';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionItemService {
  private subscriptionItems: SubscriptionItem[] = [];

  getSubscriptionItems(): SubscriptionItem[] {
    return this.subscriptionItems;
  }

  getSubscriptionItem(id: number): SubscriptionItem | undefined {
    return this.subscriptionItems.find(st => st.id === id);
  }

  addSubscriptionItem(subscriptionItem: SubscriptionItem) {

    let maxId = Math.max(...this.subscriptionItems.map(st => st.id));

    if(maxId === -Infinity){
      maxId = 0;
    }

    subscriptionItem.id = maxId + 1;

    this.subscriptionItems.push(subscriptionItem);
  }

  updateSubscriptionItem(subscriptionItem: SubscriptionItem) {
    const index = this.subscriptionItems.findIndex(st => st.id === subscriptionItem.id);
    if (index !== -1) {
      this.subscriptionItems[index] = subscriptionItem;
    }
  }

  deleteSubscriptionItem(subscriptionItem: SubscriptionItem) {
    const index = this.subscriptionItems.indexOf(subscriptionItem);
    if (index !== -1) {
      this.subscriptionItems.splice(index, 1);
    }
  }
}