import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  openMenu: boolean = false;

  openSideMenu() {
    if(!this.openMenu) {
      this.openMenu = true;
      console.log('true')
    } else {
      this.openMenu = false;
      console.log('false')
    }
    

  };
}
