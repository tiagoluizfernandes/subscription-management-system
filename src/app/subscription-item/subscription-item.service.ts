import { Injectable } from '@angular/core';
import { SubscriptionItem } from './subscription-item';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionItemService {
  private subscriptionItemList: SubscriptionItem[] = [];

  getSubscriptionItems(): SubscriptionItem[] {
    return this.subscriptionItemList;
  }

  getSubscriptionItem(id: number): SubscriptionItem | undefined {
    return this.subscriptionItemList.find((st) => st.id === id);
  }

  addSubscriptionItem(subscriptionItem: SubscriptionItem) {

    let maxId = Math.max(...this.subscriptionItemList.map((st) => st.id));

    if(maxId === -Infinity){
      maxId = 0;
    }

    subscriptionItem.id = maxId + 1;

    this.subscriptionItemList.push(subscriptionItem);
  }

  updateSubscriptionItem(subscriptionItem: SubscriptionItem) {
    const index = this.subscriptionItemList.findIndex(
      (st) => st.id === subscriptionItem.id
    );
    if (index !== -1) {
      this.subscriptionItemList[index] = subscriptionItem;
    }
  }

  deleteSubscriptionItem(subscriptionItem: SubscriptionItem) {
    const index = this.subscriptionItemList.indexOf(subscriptionItem);
    if (index !== -1) {
      this.subscriptionItemList.splice(index, 1);
    }
  }
}
