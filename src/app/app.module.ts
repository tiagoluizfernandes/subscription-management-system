import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SubscriptionTypeListComponent } from './subscription-type-list/subscription-type-list.component';
import { SubscriptionTypeFormComponent } from './subscription-type-form/subscription-type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SubscriptionTypeListComponent,
    SubscriptionTypeFormComponent
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
