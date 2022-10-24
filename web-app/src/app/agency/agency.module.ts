import { ReusableModule } from './../reusable/reusable.module';
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
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { AddressAutocompleteComponent } from './agency-form/address-autocomplete/address-autocomplete.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AgencyFormComponent,
    AgencyListComponent,
    ServicesFormComponent,
    HoursFormComponent,
    AddressAutocompleteComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReusableModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('API_KEY')
  ],
  providers: [
    DataService,
    UtilitiesService
  ]
})
export class AgencyModule { }
