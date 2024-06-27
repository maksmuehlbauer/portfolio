import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {


  @Input()project = {
    id: 0,
    img: './assets/img/my-projects/join.png',
    title: 'GG',
    languages: 'Angular | TypeScript | HTML | CSS | Firebase',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    projecturl: 'www.google.de',
    githuburl: 'www.bild.de'
  }

  // textDirection(index: number): string {
  //   if (index % 2 === 0) {
  //     return 'text-content-left'
  //   } else {
  //     return 'text-content-right'
  //   }
  // }

  textDirection(index: number): string {
    return index % 2 === 0 ? 'text-content-left' : 'text-content-right';
  }

}
