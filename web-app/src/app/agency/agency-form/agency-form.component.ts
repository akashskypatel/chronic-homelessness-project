import { UtilitiesService } from './../../utilities.service';
import { HoursFormComponent } from './hours-form/hours-form.component';
import { ServiceList } from './../../../data/service';
import { Service, ServiceCategory } from '../../../data/models';
import { Component, OnInit, ViewChildren, ViewChild, QueryList, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ServicesFormComponent } from './services-form/services-form.component';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit {
  @ViewChildren(ServicesFormComponent) private serviceCards!: QueryList<ServicesFormComponent>;
  @ViewChild(HoursFormComponent) private hfComponent!: HoursFormComponent;
  public isNew: boolean = true;
  public hours = new FormGroup({
    sunday: new FormControl(),
    monday: new FormControl(),
    tuesday: new FormControl(),
    wednesday: new FormControl(),
    thursday: new FormControl(),
    friday: new FormControl(),
    saturday: new FormControl()
  })
  public parentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    contactPhone: new FormControl(),
    website: new FormControl(),
    publicContactEmail: new FormControl(),
    cityContactEmail: new FormControl(),
    hours: this.hours,
    services: new FormArray([]),
    servicesInfo: new FormArray([])
  });
  public serviceList: Array<ServiceCategory> = ServiceList;
  constructor(private fb: FormBuilder, private utils: UtilitiesService) {
    this.addServiceCheckboxes();
    this.addServiceForms();
    if (this.isNew) {
      this.formId = utils.generateUUID();
    }
  }

  ngOnInit(): void {
  }

  get servicesFormArray() {
    return this.parentForm.controls['services'] as FormArray;
  }

  get servicesInfoFormArray() {
    return this.parentForm.controls['servicesInfo'] as FormArray;
  }

  getServiceForm(index: string) {
    return this.servicesInfoFormArray.at(parseInt(index)) as FormGroup;
  }

  getServiceHourForm(index: string) {
    return this.getServiceForm(index).controls['hours'] as FormGroup;
  }

  set formId(value: string) {
    this.parentForm.controls['id'].setValue(value);
  }

  public addHoursForm() {
    if (this.hfComponent) {
      console.log('hours added');
      this.parentForm.controls['hours'] = this.hfComponent.hoursForm;
    }
  }

  addServiceCheckboxes(values: boolean[] | void) {
    if (values) {
      values.forEach((item) => {
        this.servicesFormArray.push(new FormControl(item));
      })
    } else {
      this.serviceList.forEach(() => {
        this.servicesFormArray.push(new FormControl(false));
      })
    }
  }

  newServiceCheckbox(value: boolean) {
    return new FormControl(value);
  }

  addServiceForms(values: Service[] | void) {
    if (values) {
      values.forEach((item) => {
        this.servicesInfoFormArray.push(this.newServiceForm(item));
      })
    } else {
      this.serviceList.forEach((item) => {
        this.servicesInfoFormArray.push(this.newServiceForm({
          service: item.name,
          serviceId: item.id,
          differentHours: false,
          description: null,
          hours: {
            sunday: null,
            monday: null,
            tuesday: null,
            wednesday: null,
            thursday: null,
            friday: null,
            saturday: null
          }
        }))
      })
    }
  }

  newServiceForm(value: Service): FormGroup {
    return new FormGroup({
      service: new FormControl(value.service),
      serviceId: new FormControl(value.serviceId),
      differentHours: new FormControl(value.differentHours),
      description: new FormControl(value.description),
      hours: new FormGroup({
        sunday: new FormControl(value.hours.sunday),
        monday: new FormControl(value.hours.monday),
        tuesday: new FormControl(value.hours.tuesday),
        wednesday: new FormControl(value.hours.wednesday),
        thursday: new FormControl(value.hours.thursday),
        friday: new FormControl(value.hours.friday),
        saturday: new FormControl(value.hours.saturday),
      })
    })
  }

  serviceToggle(event: any) {
    this.serviceCards.forEach(element => {
      if (element.cardId == event.source.value) {
        element.showCard = event.source.checked;
      }
    });
  }
  saveData(data: any) {
    console.log(this.parentForm.value);
  }
}
