import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-aot',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './top-aot.component.html',
  styleUrl: './top-aot.component.scss'
})
export class TopAotComponent implements OnInit {

  public screenWidth: any;  
  public screenHeight: any;  

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;  
  }
}
