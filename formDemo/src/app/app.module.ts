import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NomarFormComponent } from './nomar-form/nomar-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { MobileDirectiveDirective } from './directive/mobile-directive.directive';
import { EqualDirectiveDirective } from './directive/equal-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    NomarFormComponent,
    ReactiveFormComponent,
    FormBuilderComponent,
    FormValidatorComponent,
    MobileDirectiveDirective,
    EqualDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
