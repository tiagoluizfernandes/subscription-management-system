import { Injectable } from '@angular/core';
import { SubscriptionType } from './subscription-type';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {
  private subscriptionTypeList: SubscriptionType[] = [];

  constructor(private localStorageService: LocalStorageService) {
  }

  getSubscriptionTypes(): SubscriptionType[] {    

    this.subscriptionTypeList = this.localStorageService.get('subscriptionTypeList') || [];

    return this.subscriptionTypeList;
  }

  getSubscriptionType(id: number): SubscriptionType | undefined {

    this.subscriptionTypeList = this.localStorageService.get('subscriptionTypeList') || [];

    return this.subscriptionTypeList.find((st) => st.id === id);
  }

  addSubscriptionType(subscriptionType: SubscriptionType) {

    let maxId = Math.max(...this.subscriptionTypeList.map((st) => st.id));

    if(maxId === -Infinity){
      maxId = 0;
    }

    subscriptionType.id = maxId + 1;

    this.subscriptionTypeList.push(subscriptionType);

    this.localStorageService.set('subscriptionTypeList', this.subscriptionTypeList);

  }

  updateSubscriptionType(subscriptionType: SubscriptionType) {
    const index = this.subscriptionTypeList.findIndex(
      (st) => st.id === subscriptionType.id
    );
    if (index !== -1) {
      this.subscriptionTypeList[index] = subscriptionType;
    }

    this.localStorageService.set('subscriptionTypeList', this.subscriptionTypeList);

  }

  deleteSubscriptionType(subscriptionType: SubscriptionType) {
    const index = this.subscriptionTypeList.indexOf(subscriptionType);
    if (index !== -1) {
      this.subscriptionTypeList.splice(index, 1);

      this.localStorageService.set('subscriptionTypeList', this.subscriptionTypeList);
    }
  }
}
