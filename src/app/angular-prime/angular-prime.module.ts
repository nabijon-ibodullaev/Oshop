import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CardModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
  ],
})
export class AngularPrimeModule {}
