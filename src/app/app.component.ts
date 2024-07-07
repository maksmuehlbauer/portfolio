import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './main-container/top-aot/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomTranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainContainerComponent,
    FooterComponent,
    ImprintComponent,
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private customTranslateService: CustomTranslateService) {}

  switchLanguage(language: string) {
    this.customTranslateService.switchLanguage(language);
  }
}
