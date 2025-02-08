import { NgModule } from '@angular/core';
import { GraduationRegisterComponent } from './graduation-register/graduation-register.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    GraduationRegisterComponent
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
    CalendarModule,
    ReactiveFormsModule
  ],
  exports: [
    GraduationRegisterComponent
    ]
})
export class GraduationsModule { }
