import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MsgSendSuccComponent } from './msg-send-succ/msg-send-succ.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MsgSendSuccComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isDisabled: boolean = true;
  visibleSucces: boolean = true;

  // NameIsEmpty: boolean = true
  // NameInfo: boolean = true;
  // namePath: string = '';
  
  // MailIsEmpty: boolean = true
  // MailInfo: boolean = true;
  // mailPath: string = '';

  // messageIsEmpty: boolean = true
  // messageInfo: boolean = true;
  // messagePath: string = '';

  checkboxPath: string = './assets/img/contact/checkbox-empty.png'
  checkboxDefaultPath: string = './assets/img/contact/checkbox-empty.png'

  contactData = {
    name: "",
    email: "",
    message: "",
  }


  http = inject(HttpClient)

  mailTest = false;

  post = {
    endPoint: 'https://maximilian-muehlbauer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }


  clearForm() {
    this.checkboxPath = './assets/img/contact/checkbox-empty.png';
    }



  checkAllFields() {
    if (this.checkboxPath === './assets/img/contact/checkbox-check-hov.png' && 
      this.contactData.name.length > 1 &&
      this.contactData.email.length > 3 &&
      this. contactData.message.length > 9) {
        this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }


  btnState() {
    return this.isDisabled ? 'disabled-btn' : 'button-large';
  }

  checkBoxState() {
    if (this.checkboxPath === this.checkboxDefaultPath) {
      this.checkboxPath = './assets/img/contact/checkbox-check-hov.png'
      
    } else {
      this.checkboxPath = './assets/img/contact/checkbox-empty.png'

    }
  }


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  // checkInputName() {
  //   if (this.contactData.name.length < 1) {
  //     this.NameIsEmpty = false;
  //     this.NameInfo = false;
  //     this.namePath = './assets/img/contact/error.png'
  //   } else {
  //     this.NameIsEmpty = false;
  //     this.NameInfo = true;
  //     this.namePath = './assets/img/contact/done.png'
  //   }
  // }

  // checkInputMail() {
  //   if (this.contactData.email.length < 1) {
  //     this.MailIsEmpty = false;
  //     this.MailInfo = false;
  //     this.mailPath = './assets/img/contact/error.png'
  //   } else {
  //     this.MailIsEmpty = false;
  //     this.MailInfo = true;
  //     this.mailPath = './assets/img/contact/done.png'
  //   }
  // }

  // checkInputMessage() {
  //   if (this.contactData.message.length < 1) {
  //     this.messageIsEmpty = false;
  //     this.messageInfo = false;
  //     this.messagePath = './assets/img/contact/error.png'
  //   } else {
  //     this.messageIsEmpty = false;
  //     this.messageInfo = true;
  //     this.messagePath = './assets/img/contact/done.png'
  //   }
  // }



}
