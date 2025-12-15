import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  imports: [NgFor,NgIf],
  templateUrl: './mission.html',
  styleUrl: './mission.scss',
  
})
export class Mission {

  
  activeIndex: number | null = null;

  faqs = [
    {
      question: 'Do you sell new or used cars?',
      answer: 'We offer both brand-new and carefully inspected used vehicles. All cars are selected to meet quality and reliability standards.'
    },
    {
      question: 'Do you provide Japan imported vehicles?',
      answer: 'Yes, we specialize in Japan imported vehicles with low mileage, excellent condition, and complete documentation.'
    },
    {
      question: 'Can I trade in my current vehicle?',
      answer: 'Yes, trade-in options are available. We offer fair market value for your existing vehicle when purchasing from us.'
    }
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}

