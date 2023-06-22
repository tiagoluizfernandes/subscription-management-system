import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionItem } from '../subscription-item/subscription-item';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';

@Component({
  selector: 'app-subscription-item-form',
  templateUrl: './subscription-item-form.component.html',
  styleUrls: ['./subscription-item-form.component.css']
})
export class SubscriptionItemFormComponent implements OnInit {
  subscriptionItem: SubscriptionItem | null = new SubscriptionItem();

  //showError = false;
  subscriptionItemErrorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionItemService: SubscriptionItemService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const subscriptionItemId = Number(params.get('id'));
      this.subscriptionItem = this.subscriptionItemService.getSubscriptionItems().find(st => st.id === subscriptionItemId) || new SubscriptionItem();
    });
  }


  saveSubscriptionItem() {
    if (this.subscriptionItem) {
      this.subscriptionItemErrorMessage = '';

      if (this.subscriptionItem.description === '' || this.subscriptionItem.description === undefined) { 
        this.subscriptionItemErrorMessage = 'Description is required.';
        //this.showError = true;
        return;
      }
            
      if (this.subscriptionItem.id === 0 || this.subscriptionItem.id === undefined) {        
        this.subscriptionItemService.addSubscriptionItem(this.subscriptionItem);
      }
      else{
        this.subscriptionItemService.updateSubscriptionItem(this.subscriptionItem);
      }
      // Redirect to the list page after saving
      this.router.navigate(['/subscription-item-list']);
    }
  }

}