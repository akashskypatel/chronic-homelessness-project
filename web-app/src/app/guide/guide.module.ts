import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { ResourceGuideComponent } from './resource-guide/resource-guide.component';
import { DataService } from '../data.service';
import { UtilitiesService } from '../utilities.service';

@NgModule({
  declarations: [
    ResourceGuideComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ],
  providers: [
    DataService,
    UtilitiesService
  ]
})
export class GuideModule { }
