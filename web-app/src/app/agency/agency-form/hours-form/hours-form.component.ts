import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hours-form',
  templateUrl: './hours-form.component.html',
  styleUrls: ['./hours-form.component.scss']
})
export class HoursFormComponent implements OnInit {
  @Input() public hoursForm: FormGroup;
  @Input() public hoursRequired: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
