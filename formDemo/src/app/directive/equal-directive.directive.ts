import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {equalValidator} from '../validators/validator';

@Directive({
  selector: '[equalValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualDirectiveDirective {
  constructor() { }
}
