import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {

   config: SwiperOptions = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    speed: 1200,
    pagination: {
      clickable: true
    },
    navigation: true
  };

}
