import { AgencyListComponent } from './../agency/agency-list/agency-list.component';
import { AgencyFormComponent } from './../agency/agency-form/agency-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'add',
    component: AgencyFormComponent
  },
  {
    path:':id/edit',
    component: AgencyFormComponent,
    pathMatch: 'full'
  },
  {
    path:'list',
    component: AgencyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
