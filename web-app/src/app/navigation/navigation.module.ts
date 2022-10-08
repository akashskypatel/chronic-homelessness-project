import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarsComponent } from './navbars/navbars.component';

import { MaterialModule } from '../../material.module';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [
    NavbarsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    NavbarsComponent
  ]
})
export class NavigationModule { }
