import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

/** 自定义密码校验器（formGroup）*/
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pcomfire: FormControl = group.get('pconfire') as FormControl;
  let valid: boolean = (password.value === pcomfire.value);
  return valid ? null : {eq: {desc: '密码和确认密码不匹配'}};
}

/** 自定义手机校验器（formControl）*/
export function mobileValidator(control: FormControl): any {
  var myReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid: boolean = myReg.test(control.value);
  /** 返回的是错误信息，  如果校验成功 name返回null  否则的话 返回错误信息*/
  return valid ? null : {mobile:true};
}

/** 自定义手机校验器（formControl）异步校验器*/
export function mobileAsyncValidator(control: FormControl): any {
  var myReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid: boolean = myReg.test(control.value);
  /** 异步校验器返回的时候，返回Observable*/
  return Observable.of(valid ? null : {mobile:true}).delay(5000);
}
