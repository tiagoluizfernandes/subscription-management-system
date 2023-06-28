import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionType } from '../subscription-type/subscription-type';
import { SubscriptionTypeService } from '../subscription-type/subscription-type.service';

@Component({
  selector: 'app-subscription-type-form',
  templateUrl: './subscription-type-form.component.html',
  styleUrls: ['./subscription-type-form.component.css']
})
export class SubscriptionTypeFormComponent implements OnInit {
  subscriptionType: SubscriptionType | null = new SubscriptionType();
  subscriptionTypeErrorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionTypeService: SubscriptionTypeService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const subscriptionTypeId = Number(params.get('id'));
      this.subscriptionType = this.subscriptionTypeService.getSubscriptionTypes().find(st => st.id === subscriptionTypeId) || new SubscriptionType();
    });
  }

  saveSubscriptionType() {
    if (this.subscriptionType) {
      this.subscriptionTypeErrorMessage = '';

      if (this.subscriptionType.description === '' || this.subscriptionType.description === undefined) { 
        this.subscriptionTypeErrorMessage = 'Description is required.';
        return;
      }
            
      if (this.subscriptionType.id === 0 || this.subscriptionType.id === undefined) {        
        this.subscriptionTypeService.addSubscriptionType(this.subscriptionType);
      }
      else{
        this.subscriptionTypeService.updateSubscriptionType(this.subscriptionType);
      }
      // Redirect to the list page after saving
      this.router.navigate(['/subscription-type-list']);
    }
  }

}