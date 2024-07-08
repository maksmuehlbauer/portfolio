import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslateService } from '../../../translate.service';
// import { PortfolioService } from '../../../portfolio.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {

  // projects: Object[] = []
  currentLanguage: string = '';

  constructor(
    // private portfolioService: PortfolioService, //portfolio.service.ts

    private customTranslateService: CustomTranslateService, //translate.service.ts
    private translateService: TranslateService // from '@ngx-translate/core';  => Modul
  ) {}

  ngOnInit() {
    // this.projects = this.portfolioService.projectList
    this.currentLanguage = this.customTranslateService.getCurrentLanguage();

    // abonniert das onLangChange Event und sendet ein Signal immer wenn die Sprache geändert wird.
    // Ein Observable vom Translateservice 
    // Überrägt das Signal vom lang change vom Child zum Parent Element
    this.translateService.onLangChange.subscribe(event => {
      this.currentLanguage = event.lang;
    });
  }


  @Input()project = {
    id: 0,
    img: './assets/img/my-projects/join.png',
    title: 'GG',
    languages: 'Angular | TypeScript | HTML | CSS | Firebase',
    descriptionen: 'EN-Text',
    descriptionde: 'DE-Text',
    projecturl: 'www.google.de',
    githuburl: 'www.wikipedia.de'
  }


  textDirection(index: number): string {
    return index % 2 === 0 ? 'text-content-left' : 'text-content-right';
  }

  getProjectDescription(project: any) {
    return this.currentLanguage === 'en' ? project.descriptionen : project.descriptionde;
  }

}
