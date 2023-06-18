export class SubscriptionType {
  id: number;
  description: string;

  constructor(id: number, description: string);
  constructor(id: number);
  constructor();
  
  constructor(id?: number, description?: string) {
    this.id = id ?? 0;
    this.description = description ?? ''!;
  }
}