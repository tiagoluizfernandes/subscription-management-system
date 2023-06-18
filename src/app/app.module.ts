import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionTypeListComponent } from './subscription-type-list/subscription-type-list.component';
import { SubscriptionTypeFormComponent } from './subscription-type-form/subscription-type-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SubscriptionItemListComponent } from './subscription-item-list/subscription-item-list.component';
import { SubscriptionItemFormComponent } from './subscription-item-form/subscription-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionTypeListComponent,
    SubscriptionTypeFormComponent,
    HomeComponent,
    AboutComponent,
    SubscriptionItemListComponent,
    SubscriptionItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
