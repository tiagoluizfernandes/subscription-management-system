import { Injectable } from '@angular/core';
import { SubscriptionItem } from './subscription-item';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionItemService {
  private subscriptionItemList: SubscriptionItem[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  getSubscriptionItems(): SubscriptionItem[] {

    this.subscriptionItemList = this.localStorageService.get('subscriptionItemList') || [];

    return this.subscriptionItemList;
  }

  getSubscriptionItem(id: number): SubscriptionItem | undefined {
    this.subscriptionItemList = this.localStorageService.get('subscriptionItemList') || [];

    return this.subscriptionItemList.find((st) => st.id === id);
  }

  addSubscriptionItem(subscriptionItem: SubscriptionItem) {

    let maxId = Math.max(...this.subscriptionItemList.map((st) => st.id));

    if(maxId === -Infinity){
      maxId = 0;
    }

    subscriptionItem.id = maxId + 1;

    this.subscriptionItemList.push(subscriptionItem);

    this.localStorageService.set('subscriptionItemList', this.subscriptionItemList);

  }

  updateSubscriptionItem(subscriptionItem: SubscriptionItem) {
    const index = this.subscriptionItemList.findIndex(
      (st) => st.id === subscriptionItem.id
    );
    if (index !== -1) {
      this.subscriptionItemList[index] = subscriptionItem;
      
      this.localStorageService.set('subscriptionItemList', this.subscriptionItemList);
    }
  }

  deleteSubscriptionItem(subscriptionItem: SubscriptionItem) {
    const index = this.subscriptionItemList.indexOf(subscriptionItem);
    if (index !== -1) {
      this.subscriptionItemList.splice(index, 1);

      this.localStorageService.set('subscriptionItemList', this.subscriptionItemList);
    }
  }
}
