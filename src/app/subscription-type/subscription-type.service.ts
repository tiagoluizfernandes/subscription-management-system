import { Injectable } from '@angular/core';
import { SubscriptionType } from './subscription-type';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {
  private subscriptionTypeList: SubscriptionType[] = [];

  getSubscriptionTypes(): SubscriptionType[] {
    return this.subscriptionTypeList;
  }

  getSubscriptionType(id: number): SubscriptionType | undefined {
    return this.subscriptionTypeList.find((st) => st.id === id);
  }

  addSubscriptionType(subscriptionType: SubscriptionType) {

    let maxId = Math.max(...this.subscriptionTypeList.map((st) => st.id));

    if(maxId === -Infinity){
      maxId = 0;
    }

    subscriptionType.id = maxId + 1;

    this.subscriptionTypeList.push(subscriptionType);
  }

  updateSubscriptionType(subscriptionType: SubscriptionType) {
    const index = this.subscriptionTypeList.findIndex(
      (st) => st.id === subscriptionType.id
    );
    if (index !== -1) {
      this.subscriptionTypeList[index] = subscriptionType;
    }
  }

  deleteSubscriptionType(subscriptionType: SubscriptionType) {
    const index = this.subscriptionTypeList.indexOf(subscriptionType);
    if (index !== -1) {
      this.subscriptionTypeList.splice(index, 1);
    }
  }
}
