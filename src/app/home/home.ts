import { Component } from '@angular/core';
import { Header } from "../sections/header/header";
import { Hero } from "../sections/hero/hero";
import { Whychoose } from "../sections/whychoose/whychoose";
import { Service } from "../sections/service/service";
import { Testimonial } from "../sections/testimonial/testimonial";
import { Overview } from "../sections/overview/overview";
import { Mission } from "../sections/mission/mission";
import { Footer } from "../sections/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Whychoose, Service, Testimonial, Overview, Mission, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
