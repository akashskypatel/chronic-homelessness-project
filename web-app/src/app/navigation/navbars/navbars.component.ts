import {MediaMatcher,BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, AfterViewInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
/** @title Orlando Service Guide */
@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements AfterViewInit {
  title = 'Orlando Service Guide';

  @ViewChild(MatSidenav) appDrawer: MatSidenav;

  constructor(public breakpointObserver: BreakpointObserver) {

  }
  ngAfterViewInit() {

  }
  openedChange(val: any) {

  }
}
