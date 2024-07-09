import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CustomTranslateService } from '../../translate.service';

@Component({
  selector: 'app-top-aot',
  standalone: true,
  imports: [HeaderComponent, CommonModule, TranslateModule],
  templateUrl: './top-aot.component.html',
  styleUrl: './top-aot.component.scss'
})
export class TopAotComponent{

  currentLanguage: string = 'en'; // Startsprache, hier 'en'

  constructor(private customTranslateService: CustomTranslateService) {}

  switchLanguage(language: string) {
    this.customTranslateService.switchLanguage(language);
  }

  switchDesktopLanguage() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'de';
    } else {
      this.currentLanguage = 'en';
    }
    this.customTranslateService.switchLanguage(this.currentLanguage);
  }
}
