import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { ServicesFormComponent } from './agency-form/services-form/services-form.component';
import { MaterialModule } from '../../material.module';
import { HoursFormComponent } from './agency-form/hours-form/hours-form.component';

@NgModule({
  declarations: [
    AgencyFormComponent,
    AgencyListComponent,
    ServicesFormComponent,
    HoursFormComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    MaterialModule
  ]
})
export class AgencyModule { }
