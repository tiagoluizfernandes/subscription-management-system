import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionItem } from '../subscription-item/subscription-item';
import { SubscriptionType } from '../subscription-type/subscription-type';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';
import { SubscriptionTypeService } from '../subscription-type/subscription-type.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subscription-item-list',
  templateUrl: './subscription-item-list.component.html',
  styleUrls: ['./subscription-item-list.component.css'],
})
export class SubscriptionItemListComponent implements OnInit {
  subscriptionTypeList: SubscriptionType[] = [];
  subscriptionItemList: SubscriptionItem[] = [];
  selectedSubscriptionItem: SubscriptionItem = new SubscriptionItem();
  exchangeRates: any; // Variable to store the exchange rates
  periodicities: any; // Variable to store the periodicities

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionItemService: SubscriptionItemService,
    private subscriptionTypeService: SubscriptionTypeService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.subscriptionItemList =
      this.subscriptionItemService.getSubscriptionItems();
    this.subscriptionTypeList =
      this.subscriptionTypeService.getSubscriptionTypes();
    this.getExchangeRates();
    this.getPeriodicities();
  }

  openModal(subscriptionItem: SubscriptionItem) {
    this.router.navigate([
      '/subscription-item-form',
      { id: subscriptionItem.id, name: subscriptionItem.description },
    ]);
  }

  addSubscriptionItem(): void {
    const addSubscriptionItem = new SubscriptionItem();
    this.openModal(addSubscriptionItem);
  }

  editSubscriptionItem(subscriptionItem: SubscriptionItem): void {
    const editSubscriptionItem = subscriptionItem;
    this.openModal(editSubscriptionItem);
  }

  deleteSubscriptionItem(subscriptionItem: SubscriptionItem): void {
    const index = this.subscriptionItemList.indexOf(subscriptionItem);

    if (index >= 0) {
      this.subscriptionItemService.deleteSubscriptionItem(subscriptionItem);
    }
  }

  getSubscriptionTypeDescription(subscriptionTypeId: Number): string {
    // mesmo o parametro sendo Number
    const id = Number(subscriptionTypeId);

    const subscriptionType = this.subscriptionTypeList.find(
      (st) => st.id === id
    );

    return subscriptionType?.description || '';
  }

  getBillingPeriodicityDescription(billingPeriodicity: string): string {
    let value = '';

    if(this.periodicities === undefined || this.periodicities.length == 0){

      switch (billingPeriodicity) {
        case 'O':
          value = 'Once';
          break;
        case 'D':
          value = 'Daily';
          break;
        case 'W':
          value = 'Weekly';
          break;
        case 'M':
          value = 'Monthly';
          break;
        case 'Y':
          value = 'Yearly';
          break;
      }
    }else{
      //console.log('billingPeriodicity', billingPeriodicity);
      this.periodicities.forEach((element: any) => {
        if(element.code == billingPeriodicity){
          value = element.description;
        }
      });
    }
    return value;
  }

  getCurrencyDescription(currency: number): string {
    const id = Number(currency);
    let value = '';
    let valorDolar = 0;

    switch (id) {
      case 1:
        value = 'Real';
        break;
      case 2:
        if (this.exchangeRates) {
          valorDolar = Number(this.exchangeRates.value[0].cotacaoCompra);
        }

        value = 'Dolar (' + valorDolar + ')';
        break;
    }

    return value;
  }

  getExchangeRates(): void {
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);

    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${formattedDate}'&$top=100&$format=json`;

    this.http.get(url).subscribe(
      (response) => {
        console.log('response', response);
        this.exchangeRates = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${month}-${day}-${year}`;
  }

  getPeriodicities(): void {
    const url = `http://localhost:3000/periodicities`;

    this.http.get(url).subscribe(
      (response) => {
        console.log('response', response);
        this.periodicities = response;

      },
      (error) => {
        console.error(error);
      }
    );
  }
}
