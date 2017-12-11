import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  private formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['张三'],
      passwordsGroup: fb.group({
        password: ['123456789'],
        pconfire: ['123456789'],
      }),
      mobiles: fb.array([
        ['110'],
        ['111']
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
