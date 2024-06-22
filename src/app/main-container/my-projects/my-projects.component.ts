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

}
