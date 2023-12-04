import {  OnInit } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuantityModalComponent } from './quantity-modal/quantity-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('modal') modal: ElementRef;

  content_loaded: boolean = false;
  productName: any;
  price: any;

  constructor(private modalController: ModalController) { }
  tabsMenu = 'Todo';
  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  async openQuantityModal(productName: string, price: number) {
    const modal = await this.modalController.create({
      component: QuantityModalComponent,
      cssClass: 'quantity-modal',
      componentProps: {
        productName: productName,
        price: price,
      },
    });
    return await modal.present();
  }

}
