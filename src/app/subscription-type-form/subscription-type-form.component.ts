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