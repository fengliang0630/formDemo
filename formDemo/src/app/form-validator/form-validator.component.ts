import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileAsyncValidator, mobileValidator} from '../validators/validator';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent implements OnInit {

  private formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['张三', [Validators.required, Validators.minLength(6)]],/** angular自带常用校验器*/
      passwordsGroup: fb.group({
        password: ['1', [Validators.required, Validators.minLength(6)]],
        pconfire: ['1'],
      }, {validator: equalValidator}),
      mobiles: fb.array([
        ['110', mobileValidator, mobileAsyncValidator],/** 添加异步校验器  异步校验器只有在同步校验器校验成功后，才会调用*/
        ['111', mobileValidator, mobileAsyncValidator]
      ]),
    });
  }

  ngOnInit() {
  }

  addMobile() {
    let mobiles: FormArray = this.formModel.get('mobiles') as FormArray;
    mobiles.push(new FormControl('120', mobileValidator, mobileAsyncValidator));
  }

  /** 提交时 获取校验成功与否   已经校验失败的时候的具体错误信息*/
  onSubmit() {
    let valid: boolean = this.formModel.get('username').valid;
    console.log('username校验结果：'+ valid);

    let errors: any = this.formModel.get('username').errors;
    console.log('username校验错误信息：'+ JSON.stringify(errors));

    let mobiles: FormArray = this.formModel.get('mobiles') as FormArray;
    let valid1: boolean = mobiles.controls[0].valid;
    console.log('第一个手机号校验结果：'+ valid1);

    let errors1: any = mobiles.controls[0].errors;
    console.log('第一个手机号校验错误信息：'+ JSON.stringify(errors1));
    console.log(this.formModel.value);
  }

}
