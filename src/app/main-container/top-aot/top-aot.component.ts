import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-top-aot',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './top-aot.component.html',
  styleUrl: './top-aot.component.scss'
})
export class TopAotComponent {

}
