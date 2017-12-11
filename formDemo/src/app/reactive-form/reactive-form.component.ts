import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  private formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      username: new FormControl('张三'),
      passwordsGroup: new FormGroup({
        password: new FormControl('123456789'),
        pconfire: new FormControl('123456789'),
      }),
      mobiles: new FormArray([
        new FormControl('110'),
        new FormControl('111')
      ]),
    });
  }

  ngOnInit() {
  }

  addMobile() {
    let mobiles: FormArray = this.formModel.get('mobiles') as FormArray;
    mobiles.push(new FormControl());
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
