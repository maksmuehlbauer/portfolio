import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projectData = inject(PortfolioService)


  getDirection(index: number): string {
    return index % 2 === 0 ? 'bg-row' : 'bg-row-reverse';

  }
}
