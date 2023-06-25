import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionItem } from '../subscription-item/subscription-item';
import { SubscriptionType } from '../subscription-type/subscription-type';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';
import { SubscriptionTypeService } from '../subscription-type/subscription-type.service';

@Component({
  selector: 'app-subscription-item-form',
  templateUrl: './subscription-item-form.component.html',
  styleUrls: ['./subscription-item-form.component.css'],
})
export class SubscriptionItemFormComponent implements OnInit {
  subscriptionItem: SubscriptionItem | null = new SubscriptionItem();
  subscriptionTypeList: SubscriptionType[] = [];
  selectedTypeId: number | undefined;

  subscriptionItemErrorMessage = '';
  subscriptionStartDateErrorMessage = '';
  subscriptionEndDateErrorMessage = '';
  subscriptionStartBillingDateErrorMessage = '';
  notesErrorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionItemService: SubscriptionItemService,
    private subscriptionTypeService: SubscriptionTypeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const subscriptionItemId = Number(params.get('id'));
      this.subscriptionItem =
        this.subscriptionItemService
          .getSubscriptionItems()
          .find((st) => st.id === subscriptionItemId) || new SubscriptionItem();
    });

    this.subscriptionTypeList = this.subscriptionItemService.getSubscriptionItems();
    console.log('Init ' + this.subscriptionTypeList.length);

  }
  
  countWordsUsingRegex(input: string): number {
    const regex = /\b\w+\b/g;
    const matches = input.match(regex);
    return matches ? matches.length : 0;
  }

  saveSubscriptionItem() {
    const regex = /^\w+\s+\w+.*$/;
    
    if (this.subscriptionItem) {
      this.subscriptionItemErrorMessage = '';      
      this.subscriptionStartDateErrorMessage = '';
      this.subscriptionEndDateErrorMessage = '';
      this.subscriptionStartBillingDateErrorMessage = '';
      this.notesErrorMessage = '';

      if ( this.subscriptionItem.description === '' ||
           this.subscriptionItem.description === undefined) {
        this.subscriptionItemErrorMessage = 'Description is required.';        
        return;
      }

      console.log('Subscription Start Date: ' + this.subscriptionItem.subscriptionStartDate);

      if(this.subscriptionItem.subscriptionStartDate === undefined){
        this.subscriptionStartDateErrorMessage = 'Subscription Start Date is required.';        
        return;
      }    

      if(this.subscriptionItem.notes === undefined){
        this.notesErrorMessage = 'Notes is required.';
        return;        
      }

      const wordCount = this.countWordsUsingRegex(this.subscriptionItem.notes);

      console.log('Word Count: ' + wordCount);

      if (wordCount < 2) {
        this.notesErrorMessage = 'Please enter at least two words.';
        return;
      }

      if (
        this.subscriptionItem.id === 0 ||
        this.subscriptionItem.id === undefined
      ) {
        this.subscriptionItemService.addSubscriptionItem(this.subscriptionItem);
      } else {
        this.subscriptionItemService.updateSubscriptionItem(
          this.subscriptionItem
        );
      }
      // Redirect to the list page after saving
      this.router.navigate(['/subscription-item-list']);
    }
  }
}
