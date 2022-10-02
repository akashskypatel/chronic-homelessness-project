import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Agency, AgencyList } from 'src/data/agency';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {
  public dataSource = AgencyList;
  public displayedColumns = ["name", "contactPhone", "cityContactEmail", "dateUpdated", "dateLastEmailed", "actions"]
  constructor() { }

  ngOnInit(): void {
  }


}
