import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

   }

   ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardHolder: ['', Validators.required],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.paymentForm.value);
    } else {
      // Form is invalid, handle accordingly
      console.log('Form is invalid');
    }
  }


}
