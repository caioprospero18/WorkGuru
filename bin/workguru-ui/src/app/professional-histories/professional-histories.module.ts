import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalHistoryRegisterComponent } from './professional-history-register/professional-history-register.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    ProfessionalHistoryRegisterComponent
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
    ProfessionalHistoryRegisterComponent
  ]
})
export class ProfessionalHistoriesModule { }
