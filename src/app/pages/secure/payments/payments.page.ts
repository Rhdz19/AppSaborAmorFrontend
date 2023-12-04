import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  cartItems: any[] = []; // Array para almacenar los elementos del carrito

  content_loaded: boolean = false;
  totalSum: number = 0;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  // Filter
  async filter() {

    // Open filter modal
    const modal = await this.modalController.create({
      component: FilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();

    // Apply filter from modal
    let { data } = await modal.onWillDismiss();

    if (data) {

      // Reload
      this.content_loaded = false;

      // Fake timeout
      setTimeout(() => {
        this.content_loaded = true;
      }, 2000);
    }
  }
  ionViewWillEnter() {
    // Recuperar el carrito del localStorage
    this.loadCart();
  }

  removeFromCart(index: number) {
    // Eliminar el producto del carrito en localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Recargar el carrito en la vista
    this.loadCart();
  }

  private loadCart() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.cartItems = storedCart;

    

  }
  decreaseQuantity(item) {
    console.log("dec")
    if (item.quantity > 1) {
      item.quantity--;
    }

    this.loadCart()
  }

  increaseQuantity(item) {
    console.log("sum")
    item.quantity++;
    this.loadCart()

  }

  getTotalPrice(item) {
    return item.quantity * item.price;
  }

  redirigirAPay() {
    
    const finalSumProducts = document.querySelectorAll('.finalSumProduct');

    // Sumar los valores y guardarlos en totalSum
    this.totalSum = 0;
    finalSumProducts.forEach((element) => {
      const value = parseFloat(element.textContent.trim().replace('$', ''));
      this.totalSum += value;
    });

    // Hacer lo que necesitas con totalSum
    console.log('Total sum:', this.totalSum);
    this.router.navigate(['payments/pay'], { queryParams: { totalSum: this.totalSum } });
  
  }
}
