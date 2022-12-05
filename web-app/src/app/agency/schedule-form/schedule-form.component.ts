import { FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CronOptions } from 'ngx-cron-editor';

export interface ScheduleDialogData {
  agency: string,
  agency_id: string,
  expression: string
}

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {
  public cronForm: FormControl;
  cronOptions: CronOptions = {
    defaultTime: "00:00:00",
    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,
    hideSpecificWeekDayTab : false,
    hideSpecificMonthWeekTab : false,
    use24HourTime: true,
    hideSeconds: false,
    cronFlavor: "quartz" //standard or quartz
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: ScheduleDialogData) { }

  ngOnInit(): void {
    this.cronForm = new FormControl(this.data.expression);
  }

}
