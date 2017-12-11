import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor() { }

  onSubmit(value: any, valid: boolean) {
    console.log(value);
    console.log(valid);
  }

  usernameValid: boolean = true;
  usernameUnTouch: boolean = true;

  onUsernameInput(form: NgForm) {
    if (form) {
      this.usernameValid = form.form.valid;
      this.usernameUnTouch = form.form.untouched;
    }
  }

}
