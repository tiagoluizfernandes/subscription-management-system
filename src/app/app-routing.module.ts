import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { SubscriptionTypeListComponent } from './subscription-type-list/subscription-type-list.component';
import { SubscriptionTypeFormComponent } from './subscription-type-form/subscription-type-form.component';
import { SubscriptionItemListComponent } from './subscription-item-list/subscription-item-list.component';
import { SubscriptionItemFormComponent } from './subscription-item-form/subscription-item-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subscription-type-list', component: SubscriptionTypeListComponent },
  { path: 'subscription-type-form', component: SubscriptionTypeFormComponent },
  { path: 'subscription-item-list', component: SubscriptionItemListComponent },
  { path: 'subscription-item-form', component: SubscriptionItemFormComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
