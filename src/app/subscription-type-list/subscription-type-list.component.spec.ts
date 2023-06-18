import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypeListComponent } from './subscription-type-list.component';

describe('SubscriptionTypeListComponent', () => {
  let component: SubscriptionTypeListComponent;
  let fixture: ComponentFixture<SubscriptionTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionTypeListComponent]
    });
    fixture = TestBed.createComponent(SubscriptionTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
