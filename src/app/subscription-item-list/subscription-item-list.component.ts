import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionItem } from '../subscription-item/subscription-item';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';

@Component({
  selector: 'app-subscription-item-list',
  templateUrl: './subscription-item-list.component.html',
  styleUrls: ['./subscription-item-list.component.css']
})
export class SubscriptionItemListComponent implements OnInit {

  subscriptionItems: SubscriptionItem[] = [];
  selectedSubscriptionItem: SubscriptionItem = new SubscriptionItem();
  
  constructor(private route: ActivatedRoute, private router: Router, private subscriptionItemService: SubscriptionItemService) { }

  ngOnInit() {
    this.subscriptionItems = this.subscriptionItemService.getSubscriptionItems();
  }   

  openModal(subscriptionItem: SubscriptionItem ) {
    
    this.router.navigate(['/subscription-item-form', { id: subscriptionItem.id, name: subscriptionItem.description }]);

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
    const index = this.subscriptionItems.indexOf(subscriptionItem);

    if(index >= 0){
      this.subscriptionItemService.deleteSubscriptionItem(subscriptionItem);
    }  
  }
}
