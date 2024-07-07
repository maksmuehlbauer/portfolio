import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-top-aot',
  standalone: true,
  imports: [HeaderComponent, CommonModule, TranslateModule],
  templateUrl: './top-aot.component.html',
  styleUrl: './top-aot.component.scss'
})
export class TopAotComponent{


}
