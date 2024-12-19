import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { EnterpriseRegisterComponent } from './enterprise-register/enterprise-register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EnterpriseRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    SharedModule,
    RouterModule,
    CalendarModule
  ],
  exports: [
    EnterpriseRegisterComponent
  ]
})
export class EnterprisesModule { }
