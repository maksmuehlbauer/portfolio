import { Component, inject, ElementRef, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']

//   animations: [
//     trigger('fadeIn', [
//       state('void', style({
//         opacity: 1,
//         backgroundColor: 'red'
//       })),
//       state('visible', style({
//         opacity: 0,
//         backgroundColor: 'yellow'
//       })),
//       transition('void => visible', [
//         animate('4s ease-in-out')
//       ])
//     ])
//   ]

})

export class MyProjectsComponent {
  // @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  isVisible = false;

  constructor() { }

  projectData = inject(PortfolioService)

  getDirection(index: number): string {
    return index % 2 === 0 ? 'bg-row' : 'bg-row-reverse';
  }

  // ngAfterViewInit(): void {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         this.isVisible = true;
  //         // observer.disconnect(); // Optional, wenn du nur die erste Sichtbarkeit benötigst
  //       }
  //     });
  //   });

  //   this.animatedElements.forEach(element => {
  //     observer.observe(element.nativeElement);
  //   });
  // }

}

