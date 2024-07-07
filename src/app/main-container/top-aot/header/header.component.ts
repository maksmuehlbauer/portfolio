import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


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
