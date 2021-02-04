import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public firstname: string;

  public lastname: string;

  public message: string;

  public phone: string;

  public email: string;

  public selectedCity: any = null;

  public cities: any[] = [
    { name: 'Sofia', code: 'Sofia' },
    { name: 'Plovdiv', value: 'Plovdiv' },
    { name: 'Varna', code: 'Varna' },
    { name: 'Burgas', code: 'Burgas' },
    { name: 'Pazardzhik', code: 'Pazardzhik' }
  ];

  public isButtonClicked = false;

  public isEmailValid = true;
  public isMessageLenghtValid = true;
  public isFnameValid = true;
  public isLnameValid = true;
  public isPhoneValid = true;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    this.isButtonClicked = true;
    this.isEmailValid = EmailValidator.validate(this.email);
    if(this.message.length>1000) {
      this.isMessageLenghtValid = false;
    }
    this.isFnameValid = this.firstname.length>50 ? false : true;
    this.isLnameValid = this.lastname.length>60 ? false : true;
    this.isPhoneValid = this.validatedPhone(this.phone);

    if (this.firstname && this.isFnameValid && this.lastname && this.isLnameValid
       && this.message && this.isMessageLenghtValid && this.email && this.isEmailValid 
       && this.phone && this.isPhoneValid && this.selectedCity) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'Your message has been successfully sent.', life: 5000
      });
      this.firstname = null;
      this.lastname = null;
      this.message = null;
      this.email = null;
      this.phone = null;
      this.selectedCity = null;
      this.isButtonClicked = false;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: 'Your contact information is incomplete.', life: 5000
      });
    }
  }

  public validatedPhone(phone: string): boolean {
    const regex = new RegExp('^\\d{8,15}$');
    return regex.test(phone);
  }
}
