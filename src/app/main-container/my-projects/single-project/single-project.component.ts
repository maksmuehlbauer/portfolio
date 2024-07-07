import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslateService } from '../../../translate.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {

  // language = inject(TranslateService)
  currentLanguage: string = '';

  constructor(private customTranslateService: CustomTranslateService) {}

  ngOnInit() {
    this.currentLanguage = this.customTranslateService.getCurrentLanguage();

  }


  @Input()project = {
    id: 0,
    img: './assets/img/my-projects/join.png',
    title: 'GG',
    languages: 'Angular | TypeScript | HTML | CSS | Firebase',
    descriptionen: 'EN-Text',
    projecturl: 'www.google.de',
    githuburl: 'www.wikipedia.de'
  }


  textDirection(index: number): string {
    return index % 2 === 0 ? 'text-content-left' : 'text-content-right';
  }

}
