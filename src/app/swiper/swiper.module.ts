import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SwiperComponent
  ],
  exports: [
    SwiperComponent
  ]
})
export class SwiperModule { }

export { SwiperComponent } from './swiper/swiper.component';
