import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedComponent } from './security/authorized/authorized.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobRegisterComponent } from './jobs/job-register/job-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsListComponent },
  { path: 'jobs/new', component: JobRegisterComponent },
  { path: 'jobs/:id', component: JobRegisterComponent },
  { path: 'authorized', component: AuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
