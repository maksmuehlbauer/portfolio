import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projectData = inject(PortfolioService)

  // getDirection(index: number): string {
  //   if (index % 2 === 0) {
  //     return 'bg-row'
  //   } else {
  //     return 'bg-row-reverse'
  //   }
  // }

  getDirection(index: number): string {
    return index % 2 === 0 ? 'bg-row' : 'bg-row-reverse';

  }
}
