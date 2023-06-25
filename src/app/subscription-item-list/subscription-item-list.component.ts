import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionItem } from '../subscription-item/subscription-item';
import { SubscriptionType } from '../subscription-type/subscription-type';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';
import { SubscriptionTypeService } from '../subscription-type/subscription-type.service';

@Component({
  selector: 'app-subscription-item-list',
  templateUrl: './subscription-item-list.component.html',
  styleUrls: ['./subscription-item-list.component.css'],
})
export class SubscriptionItemListComponent implements OnInit {
  subscriptionTypeList: SubscriptionType[] = [];
  subscriptionItemList: SubscriptionItem[] = [];
  selectedSubscriptionItem: SubscriptionItem = new SubscriptionItem();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionItemService: SubscriptionItemService,
    private subscriptionTypeService: SubscriptionTypeService
  ) {}

  ngOnInit() {
    this.subscriptionItemList =
      this.subscriptionItemService.getSubscriptionItems();
    this.subscriptionTypeList =
      this.subscriptionTypeService.getSubscriptionTypes();
  }

  openModal(subscriptionItem: SubscriptionItem) {
    this.router.navigate([
      '/subscription-item-form',
      { id: subscriptionItem.id, name: subscriptionItem.description },
    ]);
  }

  addSubscriptionItem(): void {
    const addSubscriptionItem = new SubscriptionItem();
    this.openModal(addSubscriptionItem);
  }

  editSubscriptionItem(subscriptionItem: SubscriptionItem): void {
    const editSubscriptionItem = subscriptionItem;
    this.openModal(editSubscriptionItem);
  }

  deleteSubscriptionItem(subscriptionItem: SubscriptionItem): void {
    const index = this.subscriptionItemList.indexOf(subscriptionItem);

    if (index >= 0) {
      this.subscriptionItemService.deleteSubscriptionItem(subscriptionItem);
    }
  }

  getSubscriptionTypeDescription(subscriptionTypeId: Number): string {
    // mesmo o parametro sendo Number
    const id = Number(subscriptionTypeId);

    const subscriptionType = this.subscriptionTypeList.find(
      (st) => st.id === id
    );

    return subscriptionType?.description || '';
  }
}
