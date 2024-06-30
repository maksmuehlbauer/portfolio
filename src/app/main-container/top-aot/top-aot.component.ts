import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-aot',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './top-aot.component.html',
  styleUrl: './top-aot.component.scss'
})
export class TopAotComponent {

}
