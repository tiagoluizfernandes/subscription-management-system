import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionItemFormComponent } from './subscription-item-form.component';

describe('SubscriptionItemFormComponent', () => {
  let component: SubscriptionItemFormComponent;
  let fixture: ComponentFixture<SubscriptionItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionItemFormComponent]
    });
    fixture = TestBed.createComponent(SubscriptionItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
