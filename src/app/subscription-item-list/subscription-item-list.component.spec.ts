import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionItemListComponent } from './subscription-item-list.component';

describe('SubscriptionItemListComponent', () => {
  let component: SubscriptionItemListComponent;
  let fixture: ComponentFixture<SubscriptionItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionItemListComponent]
    });
    fixture = TestBed.createComponent(SubscriptionItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
