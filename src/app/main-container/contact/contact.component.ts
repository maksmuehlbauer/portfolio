import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MsgSendSuccComponent } from './msg-send-succ/msg-send-succ.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MsgSendSuccComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isDisabled: boolean = true;
  visibleSucces: boolean = true;


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
            this.userFeedback();
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

  userFeedback() {
    this.visibleSucces = false;
    setTimeout(() => {
      this.visibleSucces = true;
    }, 3000);
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


}
