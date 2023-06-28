import { SubscriptionType } from "../subscription-type/subscription-type";

export class SubscriptionItem {
  id: number;
  subscriptionType: SubscriptionType;
  description: string;
  billingPeriodicity: string;
  billingValue: number;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  subscriptionStartBillingDate: Date;
  notes: string;

  constructor(
    id?: number,
    description?: string,
    subscriptionType?: SubscriptionType,
    billingPeriodicity?: string,
    billingValue?: number,
    subscriptionStartDate?: Date,
    subscriptionEndDate?: Date,
    subscriptionStartBillingDate?: Date,
    notes?: string
  ) {
    this.id = id!;
    this.description = description!;
    this.subscriptionType = subscriptionType!;
    this.billingPeriodicity = billingPeriodicity!;
    this.billingValue = billingValue!;
    this.subscriptionStartDate = subscriptionStartDate!;
    this.subscriptionEndDate = subscriptionEndDate!;
    this.subscriptionStartBillingDate = subscriptionStartBillingDate!;
    this.notes = notes!;
  }
}
