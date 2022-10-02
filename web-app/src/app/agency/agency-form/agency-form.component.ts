import { ServiceCategory, ServiceList } from './../../../data/service';
import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ServicesFormComponent } from './services-form/services-form.component';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit {
  @ViewChildren(ServicesFormComponent) private serviceCards: QueryList<ServicesFormComponent>;
  @Input() parentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    contactPhone: new FormControl(),
    website: new FormControl(),
    publicContactEmail: new FormControl(),
    cityContactEmail: new FormControl(),
    hours: new FormControl(),
    services: new FormArray([]),
    servicesInfo: new FormArray([])
  });
  public services: Array<ServiceCategory> = ServiceList;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  serviceToggle(event: any) {
    console.log(event.source);
    this.serviceCards.forEach(element => {
      if (element.cardId == event.source.value) {
        element.showCard = event.source.checked;
      }
    });
  }
  saveData(data: any) {
    console.log(data);
  }
}
