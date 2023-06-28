import { SubscriptionType } from "../subscription-type/subscription-type";

export class SubscriptionItem {
  id: number;
  description: string;
  subscriptionTypeId: number;
  billingPeriodicity: string;
  billingValue: number;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  subscriptionStartBillingDate: Date;
  currency: number;
  notes: string;

  constructor(
    id?: number,
    description?: string,
    subscriptionTypeId?: number,
    billingPeriodicity?: string,
    billingValue?: number,
    subscriptionStartDate?: Date,
    subscriptionEndDate?: Date,
    subscriptionStartBillingDate?: Date,
    currency?: number,
    notes?: string
  ) {
    this.id = id!;
    this.description = description!;
    this.subscriptionTypeId = subscriptionTypeId!;
    this.billingPeriodicity = billingPeriodicity!;
    this.billingValue = billingValue!;
    this.subscriptionStartDate = subscriptionStartDate!;
    this.subscriptionEndDate = subscriptionEndDate!;
    this.subscriptionStartBillingDate = subscriptionStartBillingDate!;
    this.currency = currency!;
    this.notes = notes!;
  }
}
