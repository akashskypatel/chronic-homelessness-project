import { AgencyServices } from './../../../data/service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit {
  public services: string[] = [
    'Drop-in Center',
    'Employment',
    'Family Housing Help',
    'Low-income Housing Help',
    'Food',
    'Health/Medical/Dental',
    'Government Application Assistance',
    'LGBTQ+ Specific Services',
    'Pregnancy Related Services',
    'Shelter (Men)',
    'Shelter (Women/Children)',
    'Showers/Hygiene',
    'Support Group',
    'Veteran Services',
    'Youth Services',
    'Senior (60+) Services'
  ];
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
