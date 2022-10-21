import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { ServicesFormComponent } from './agency-form/services-form/services-form.component';
import { MaterialModule } from '../../material.module';
import { HoursFormComponent } from './agency-form/hours-form/hours-form.component';
import { DataService } from '../data.service';
import { UtilitiesService } from '../utilities.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule
  ],
  providers: [
    DataService,
    UtilitiesService
  ]
})
export class AgencyModule { }
