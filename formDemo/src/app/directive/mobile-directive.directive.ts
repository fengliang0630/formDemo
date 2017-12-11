import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {mobileValidator} from '../validators/validator';

/**
 * 指令可以理解为没有模板的组件  和组件能做的事情是一样的
 */
@Directive({
  selector: '[mobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class MobileDirectiveDirective {
  constructor() {}
}
