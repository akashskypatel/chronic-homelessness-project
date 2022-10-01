import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { ResourceGuideComponent } from './resource-guide/resource-guide.component';


@NgModule({
  declarations: [
    ResourceGuideComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
