import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-personal-description',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './personal-description.component.html',
  styleUrl: './personal-description.component.scss',
  animations: [
    trigger('fadeInFromLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => visible', [
        animate('0.75s ease-in-out')
      ])
    ]),
    trigger('fadeInFromRight', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => visible', [
        animate('0.75s ease-in-out')
      ])
    ])
  ]
})
export class PersonalDescriptionComponent {
  isVisible = false;
  scrollTriggerY = 250; // Y-Koordinate, bei der die Animation ausgelöst wird

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY >= this.scrollTriggerY) {
      
      this.isVisible = true;
    }
  }
}
