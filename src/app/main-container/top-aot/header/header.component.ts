import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomTranslateService } from '../../../translate.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  openMenu: boolean = false;
  scrollEnabled: boolean = true;
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

  toggleSideMenu() {
    if(!this.openMenu) {
      this.openMenu = true;
      this.toggleScrolling();
    } else {
      this.openMenu = false;
      this.toggleScrolling();
    }
  };

  
  toggleScrolling() {
    if (this.scrollEnabled) {
        document.body.style.overflow = 'hidden';
        this.scrollEnabled = false;
    } else {
        document.body.style.overflow = 'auto';
        this.scrollEnabled = true;
    }
}



}
