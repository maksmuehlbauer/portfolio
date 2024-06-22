import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {


  @Input()project = {
    img: './assets/img/my-projects/join.png',
    title: 'GG',
    languages: 'Angular | TypeScript | HTML | CSS | Firebase',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    projecturl: 'www.google.de',
    githuburl: 'www.bild.de'
  }
}
