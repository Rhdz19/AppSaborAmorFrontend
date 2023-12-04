import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
// import { PayPal, PayPalPayment, PayPalConfiguration } from 'ngx-paypal';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],
})
export class PaymentDetailPage implements OnInit {
  selectedOption: string = 'envio'; // O 'recoger' si quieres establecer la opción por defecto como recoger
  paymentMethod: string = 'tarjeta'; // O 'recoger' si quieres establecer la opción por defecto como recoger
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,private toastController: ToastController, private router: Router,private alertaaa: AlertController
    , private modalController: ModalController, private navController: NavController) {

   }


   totalSum: number = 0;
   ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardHolder: ['', Validators.required],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });

      // Obtener el valor de totalSum de los parámetros de la URL
      this.route.queryParams.subscribe((params) => {
        this.totalSum = parseFloat(params['totalSum']) || 0;
      });
  }

  async onSubmit() {
    if (this.paymentForm.valid) {
      // Handle form submission
      const toast = await this.toastController.create({
        message: 'Pedido completado exitosamente',
        duration: 2000, // Duración del Toast en milisegundos
        position: 'top' // Puedes ajustar la posición del Toast según tus necesidades
      });
    
      await toast.present();
    
      // Navega de nuevo al inicio
      this.router.navigate(['/home']);
      console.log('Form submitted:', this.paymentForm.value);
    } else {
      // Form is invalid, handle accordingly
      console.log('Form is invalid');
    }
  }
validarSelected(){
  if (this.selectedOption) {
    // Se ha seleccionado una opción, realiza la lógica correspondiente
    console.log('Opción seleccionada:', this.selectedOption);
    return true
  } else {
    // No se ha seleccionado ninguna opción, muestra un mensaje de error o realiza la acción correspondiente
    console.log('Por favor, selecciona una opción.');
    return false
  }
}
async alerta() {
  const alert = await this.alertaaa.create({
    header: 'Operación realizada con éxito',
    subHeader: '¡Gracias por tu orden!',
    message: 'Orden No. 10993.',
    buttons: [{
      text: 'Aceptar',
      handler: () => {
        // Realiza la redirección al inicio después de hacer clic en Aceptar
        this.router.navigate(['/home']); // Ajusta la ruta según tu estructura de enrutamiento
         // Vacía el contenido del localStorage
         localStorage.clear();

      }
    }],
  });

  await alert.present();

}


}
