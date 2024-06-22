import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isDisabled: boolean = false;

  onSubmit(event: Event){
    event.preventDefault();
  }

  checkbutton() {
    if(this.isDisabled) {
      console.log('ist disabled')
    } else {
      console.log('ist abled')
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
