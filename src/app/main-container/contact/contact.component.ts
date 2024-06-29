import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isDisabled: boolean = true;

  inputDataName: string = '';
  NameIsEmpty: boolean = true
  NameInfo: boolean = true;
  namePath: string = '';
  
  inputDataMail: string = '';
  MailIsEmpty: boolean = true
  MailInfo: boolean = true;
  mailPath: string = '';

  inputDataMessage: string = '';
  messageIsEmpty: boolean = true
  messageInfo: boolean = true;
  messagePath: string = '';

  checkboxPath: string = './assets/img/contact/checkbox-empty.png'
  checkboxDefaultPath: string = './assets/img/contact/checkbox-empty.png'


  onSubmit(event: Event){
    event.preventDefault();
  }

  btnState() {
    return this.isDisabled ? 'disabled-btn' : 'button-large';
  }



  checkBoxState() {
    if (this.checkboxPath === this.checkboxDefaultPath) {
      this.checkboxPath = './assets/img/contact/checkbox-check-hov.png'
      this.isDisabled = false;
    } else {
      this.checkboxPath = './assets/img/contact/checkbox-empty.png'
      this.isDisabled = true;
    }
  }




  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  checkInputName() {
    if (this.inputDataName.length < 1) {
      this.NameIsEmpty = false;
      this.NameInfo = false;
      this.namePath = './assets/img/contact/error.png'
    } else {
      this.NameIsEmpty = false;
      this.NameInfo = true;
      this.namePath = './assets/img/contact/done.png'
    }
  }

  checkInputMail() {
    if (this.inputDataMail.length < 1) {
      this.MailIsEmpty = false;
      this.MailInfo = false;
      this.mailPath = './assets/img/contact/error.png'
    } else {
      this.MailIsEmpty = false;
      this.MailInfo = true;
      this.mailPath = './assets/img/contact/done.png'
    }
  }

  checkInputMessage() {
    if (this.inputDataMessage.length < 1) {
      this.messageIsEmpty = false;
      this.messageInfo = false;
      this.messagePath = './assets/img/contact/error.png'
    } else {
      this.messageIsEmpty = false;
      this.messageInfo = true;
      this.messagePath = './assets/img/contact/done.png'
    }
  }



}
