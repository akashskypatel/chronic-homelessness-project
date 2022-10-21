import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AgencyList } from 'src/data/agency';
import { Agency } from 'src/data/models';
import { UtilitiesService } from 'src/app/utilities.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource(AgencyList);
  public displayedColumns = ["name", "contactPhone", "cityContactEmail", "dateUpdated", "dateLastEmailed", "actions"]
  constructor(public utils: UtilitiesService, private _liveAnnouncer: LiveAnnouncer) { }
  searchField: FormControl = new FormControl();

  ngOnInit(): void {
    this.dataSource.filterPredicate = this.filterPredicate();
    this.searchField.valueChanges.subscribe(value => {
      this.dataSource.filter = value;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterPredicate() {
    let filterFunction = (data: any, filter: string): boolean => {
      let match = true;
      if (filter) {
        for (var key of Object.keys(data)) {
          if (key !== 'id' && typeof data[key] !== 'object') {
            match = String(data[key]).toLowerCase().includes(filter);
            if (match) return match;
          }
        }
        return false;
      } else {
        return true;
      }
    }
    return filterFunction
  }
}
