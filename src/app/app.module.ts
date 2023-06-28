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
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionTypeListComponent,
    SubscriptionTypeFormComponent,
    HomeComponent,
    AboutComponent,
    SubscriptionItemListComponent,
    SubscriptionItemFormComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
