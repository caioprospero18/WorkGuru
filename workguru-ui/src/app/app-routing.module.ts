import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedComponent } from './security/authorized/authorized.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobRegisterComponent } from './jobs/job-register/job-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AuthGuard } from './security/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { EnterpriseRegisterComponent } from './enterprises/enterprise-register/enterprise-register.component';
import { CandidateRegisterComponent } from './candidates/candidate-register/candidate-register.component';
import { JobViewComponent } from './jobs/job-view/job-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'enterprises/new', component: EnterpriseRegisterComponent },
  { path: 'candidates/new', component: CandidateRegisterComponent },
  {
    path: 'jobs/:id',
    component: JobRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_JOB']}
  },
  {
    path: 'jobs/view/:id',
    component: JobViewComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_JOB']}
  },
  {
    path: 'jobs',
    component: JobsListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_JOB']}
  },
  {
    path: 'jobs/new',
    component: JobRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_JOB'] }
  },
  { path: 'authorized', component: AuthorizedComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'page-not-found'} // importante que seja a última rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
