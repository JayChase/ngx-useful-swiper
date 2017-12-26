import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from '../swiper/swiper.module';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class DemoModule { }
