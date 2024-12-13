import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedComponent } from './security/authorized/authorized.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobRegisterComponent } from './jobs/job-register/job-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: 'jobs/:id',
    component: JobRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_JOB']}
  },
  {
    path: 'jobs',
    component: JobRegisterComponent,
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
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
