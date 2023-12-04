import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quantity-modal',
  templateUrl: './quantity-modal.component.html',
  styleUrls: ['./quantity-modal.component.scss'],
})
export class QuantityModalComponent implements OnInit {
  @Input() productName: string;
  @Input() price: number;
  quantity: number = 1; // Inicializamos la cantidad en 1
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  
  closeModal() {
    this.modalController.dismiss();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    const cartItem = {
      productName: this.productName,
      price: this.price,
      quantity: this.quantity,
    };

    // Obtener el carrito actual del localStorage o crear uno vacío si no existe
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Agregar el nuevo elemento al carrito
    currentCart.push(cartItem);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // Cerrar el modal después de agregar al carrito
    this.modalController.dismiss();

    // Puedes mostrar un mensaje o realizar otras acciones después de agregar al carrito
    console.log(`Added ${this.quantity} ${this.productName} to the cart.`);
  }
}
