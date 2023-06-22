import { SubscriptionType } from "../subscription-type/subscription-type";

export class SubscriptionItem {
  id: number;
  SubscriptionType: SubscriptionType;
  description: string;


  constructor(id: number, description: string);
  constructor(id: number);
  constructor();
  
  constructor(id?: number, description?: string, SubscriptionType?: SubscriptionType) {
    this.id = id!;
    this.description = description!;
    this.SubscriptionType = SubscriptionType!;
  }
}