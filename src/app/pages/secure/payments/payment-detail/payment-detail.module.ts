import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentDetailPageRoutingModule } from './payment-detail-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentDetailPage } from './payment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PaymentDetailPage]
})
export class PaymentDetailPageModule {}
