import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionType } from '../subscription-type/subscription-type';
import { SubscriptionTypeService } from '../subscription-type/subscription-type.service';

@Component({
  selector: 'app-subscription-type-list',
  templateUrl: './subscription-type-list.component.html',
  styleUrls: ['./subscription-type-list.component.css']
})
export class SubscriptionTypeListComponent implements OnInit {
  subscriptionTypes: SubscriptionType[] = [];
  selectedSubscriptionType: SubscriptionType = new SubscriptionType();
  
  constructor(private route: ActivatedRoute, private router: Router, private subscriptionTypeService: SubscriptionTypeService) { }

  ngOnInit() {
    this.subscriptionTypes = this.subscriptionTypeService.getSubscriptionTypes();
  }   

  openModal(subscriptionType: SubscriptionType ) {
    
    this.router.navigate(['/subscription-type-form', { id: subscriptionType.id, name: subscriptionType.description }]);

  }
    
  addSubscriptionType(): void {
        
    const addSubscriptionType = new SubscriptionType();    
    this.openModal(addSubscriptionType);
    
  }

  editSubscriptionType(subscriptionType: SubscriptionType): void {
    const editSubscriptionType = subscriptionType;        
    this.openModal(editSubscriptionType);
  }

  deleteSubscriptionType(subscriptionType: SubscriptionType): void {
    const index = this.subscriptionTypes.indexOf(subscriptionType);

    if(index >= 0){
      this.subscriptionTypeService.deleteSubscriptionType(subscriptionType);
    }  
  }
}
