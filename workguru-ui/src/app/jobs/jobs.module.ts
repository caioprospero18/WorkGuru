import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobRegisterComponent } from './job-register/job-register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    JobsListComponent,
    JobRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    JobsListComponent,
    JobRegisterComponent
  ]
})
export class JobsModule { }
