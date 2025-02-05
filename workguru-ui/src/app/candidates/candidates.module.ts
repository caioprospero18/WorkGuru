import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { SharedModule } from '../shared/shared.module';
import { CandidateViewProfileComponent } from './candidate-view-profile/candidate-view-profile.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CandidateUpdateProfileComponent } from './candidate-update-profile/candidate-update-profile.component';
import { GraduationsModule } from '../graduations/graduations.module';




@NgModule({
  declarations: [
    CandidateRegisterComponent,
    CandidateViewProfileComponent,
    CandidateUpdateProfileComponent,

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
    TableModule,
    TooltipModule,
    GraduationsModule
],
    exports: [
        CandidateRegisterComponent,
        CandidateViewProfileComponent
      ]
})
export class CandidatesModule { }
