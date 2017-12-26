import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  images: string[];
  config: any = {
    pagination: {
      el: '.swiper-pagination',
    },
    paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30
  };

  constructor() { }

  ngOnInit() {
  }

  loadImages() {
    this.images = [
      'http://localhost:4200/assets/images/yellow.png',
      'http://localhost:4200/assets/images/green.png',
      'http://localhost:4200/assets/images/blue.png'
    ];
  }
}
