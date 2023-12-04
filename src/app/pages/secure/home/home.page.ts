import {  OnInit } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { QuantityModalComponent } from './quantity-modal/quantity-modal.component';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('modal') modal: ElementRef;
  selectedSegment: string =''
  content_loaded: boolean = false;
  productName: any;
  price: any;
  alertButtons = ['Action'];
  constructor(private modalController: ModalController,public toastController: ToastController, private alertController: AlertController) { }
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

  async reservarClicked() {
    // Mostrar un Toast
    const toast = await this.toastController.create({
      message: 'Reserva realizada con éxito',
      duration: 2000, // Duración en milisegundos
      position: 'bottom' // Puedes cambiar la posición si lo deseas
    });

    toast.present();
  }
async alerta(){
  const alert = await this.alertController.create({
    header: 'Reservaciones',
    subHeader: 'En caso de desear reservar una mesa',
    message: 'Contáctanos al siguiente número telefónico: 9982405270.',
    buttons: ['Aceptar'],
  });

  await alert.present();

}
}
