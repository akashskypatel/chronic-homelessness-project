import { AgencyList } from './../../../data/agency';
import { UtilitiesService } from './../../utilities.service';
import { HoursFormComponent } from './hours-form/hours-form.component';
import { ServiceList } from './../../../data/service';
import { Agency, Service, ServiceCategory } from '../../../data/models';
import { Component, OnInit, ViewChildren, ViewChild, QueryList, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ActivatedRoute } from '@angular/router';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const google_api_key = '<REPLACE WITH YOUR API KEY>';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit,AfterViewInit {
  @ViewChildren(ServicesFormComponent) private serviceCards!: QueryList<ServicesFormComponent>;
  @ViewChild(HoursFormComponent) private hfComponent!: HoursFormComponent;
  public address = new FormControl();
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
    address: this.address,
    contactPhone: new FormControl(),
    website: new FormControl(),
    publicContactEmail: new FormControl(),
    cityContactEmail: new FormControl(),
    hours: this.hours,
    services: new FormArray([]),
    servicesInfo: new FormArray([])
  });
  public serviceList: Array<ServiceCategory> = ServiceList; //TODO: change to fetch from database instead of static file.
  public agencyList: Array<Agency> = AgencyList;
  public agency: Agency;
  public id: string;
  userAddress: string = '';
  userLatitude: string = '';
  userLongitude: string = '';
  addressId: string = '';
  googleoptions = {
    types: ['address'],
    componentRestrictions: { country: 'US' }
  } as unknown as Options
  apiLoaded: Observable<boolean> = of(false);

  constructor(private fb: FormBuilder, private utils: UtilitiesService, private route: ActivatedRoute, private httpClient: HttpClient) {
    this.addServiceCheckboxes();
    this.addServiceForms();
    // check if id is present in query params to determine
    // if this is an edit form or add new form
    this.id;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.isNew = false;
        this.agency = this.agencyList.filter(item => this.id.includes(item.id))[0]; //TODO: change to fetch by id from the database instead of static file
      }
    });
    // generate a new id if this is an add new form
    if (this.isNew) {
      this.formId = utils.generateUUID();
    } else {
    // otherwise set id to query param id
      this.formId = this.id;
      this.parseData(this.agency);
    }
  }

  onError(err: any) {
    return false;
  }

  ngOnInit(): void {
    this.loadGoogleMapsApi();
  }

  ngAfterViewInit() {

  }
  /**
   * Lazy load google maps API
   */
  loadGoogleMapsApi() {
    this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${google_api_key}&libraries=places&language=en`, 'callback')
        .pipe(
          map(() => true),
          catchError((err) => of(this.onError(err))),
        );
  }
  /**
   * Set address values when user select autocompleted address
   * @param address user entered address string
   */
  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address;
    this.address.setValue(this.userAddress);
    this.userLatitude = address.geometry.location.lat();
    this.userLongitude = address.geometry.location.lng();
  }

  //#region "Form Getters"

  /**
   * Get the array of service checkboxes in the form
   * @returns array of service checkboxes
   */
  get servicesFormArray() {
    return this.parentForm.controls['services'] as FormArray;
  }
  /**
   * Get the array of service sub-forms in the parent form
   * @returns array of service sub-forms
   */
  get servicesInfoFormArray() {
    return this.parentForm.controls['servicesInfo'] as FormArray;
  }
  /**
   * Get the checkbox value by given index in the form
   * @param index array index
   * @returns service checkbox value
   */
  getServiceCheckboxValue(index: string) {
    return this.servicesFormArray.at(parseInt(index)).value as boolean;
  }
  /**
   * Get the checkbox form control by given index in the form
   * @param index array index
   * @returns service checkbox form control
   */
  getServiceCheckbox(index: string) {
    return this.servicesFormArray.at(parseInt(index));
  }
  /**
   * Get the specific service sub-form by index
   * @param index array index
   * @returns specific service sub-form
   */
  getServiceForm(index: string) {
    return this.servicesInfoFormArray.at(parseInt(index)) as FormGroup;
  }
  /**
   * Get the specific service hours sub-form by index
   * @param index array index
   * @returns service hours sub-form
   */
  getServiceHourForm(index: string) {
    return this.getServiceForm(index).controls['hours'] as FormGroup;
  }
  // #endregion "Form Getters"


  //#region "Form Setters"
  /**
   * Set the value of id form field in the parent form
   * @param value id value
   */
  set formId(value: string) {
    this.parentForm.controls['id'].setValue(value);
  }
  /**
   * Set the value of service enabled field in the service sub-form array by index
   * @param index array index
   * @param value boolean value
   */
  setServiceEnabled(index: string, value: boolean) {
    this.getServiceForm(index).controls['enabled'].setValue(value);
  }
  /**
   * Set the value of service checkbox field in the service checkbox array by index
   * @param index array index
   * @param value boolean value
   */
  setServiceCheckbox(index: string, value: boolean) {
    this.getServiceCheckbox(index).setValue(value);
  }
  // #endregion "Form Setters"

  /**
   * Add the hours sub-form for agency's general hours to the parent form
   */
  public addHoursForm() {
    if (this.hfComponent) {
      this.parentForm.controls['hours'] = this.hfComponent.hoursForm;
    }
  }
  /**
   * For edit form, creates a checkbox form field for each element in the array
   * if an array is provided and adds it to the parent form.
   * For add form, creates checkbox form field for each element in the ServiceList array
   * @param values void or boolean array
   */
  addServiceCheckboxes() {
    this.serviceList.forEach(() => {
      this.servicesFormArray.push(new FormControl(false));
    })
  }
  /**
   * Create a new form control with given value as the default value
   * @param value boolean value
   * @returns new form control
   */
  newServiceCheckbox(value: boolean) {
    return new FormControl(value);
  }
  /**
   * For edit form, creates a service sub-form for each element in the given array,
   * if an array is provided, and adds it to the parent form.
   * For add form, creates service sub-form for each element in the ServiceList array
   * @param values
   */
  addServiceForms() {
    this.serviceList.forEach((item) => {
      this.servicesInfoFormArray.push(this.newServiceForm({
        enabled: false,
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
  /**
   * Creates a new prepopulated sub-form for a service based on given values
   * @param value form values for a service
   * @returns a new sub-form with values populated based on given values
   */
  newServiceForm(value: Service): FormGroup {
    return new FormGroup({
      enabled: new FormControl(value.enabled),
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
  /**
   * Submit form data
   * @param data form data to submit
   */
  saveData(data: any) {
    var serviceForms = this.parentForm.value['servicesInfo'].filter((item: { [x: string]: boolean; }) => item['enabled'] === true)
    this.parentForm.value['servicesInfo'] = serviceForms;
    this.parentForm.value['services'] = serviceForms.map((item: { [x: string]: any; }) => item['service']);
    console.log(this.parentForm.value);
  }
  /**
   * Populate the form with given agency data for editting mode
   * @param data agency data
   */
  parseData(data: Agency) {
    if (this.agency) {
      this.parentForm.patchValue({
        id: this.agency.id,
        name: this.agency.name,
        address: this.agency.address,
        contactPhone: this.agency.contactPhone,
        website: this.agency.website,
        publicContactEmail: this.agency.publicContactEmail,
        cityContactEmail: this.agency.cityContactEmail,
      });
      this.hours.patchValue({
        sunday: this.agency.hours.sunday,
        monday: this.agency.hours.monday,
        tuesday: this.agency.hours.tuesday,
        wednesday: this.agency.hours.wednesday,
        thursday: this.agency.hours.thursday,
        friday: this.agency.hours.friday,
        saturday: this.agency.hours.saturday,
      });
      // populate each service sub-forms
      this.agency.servicesInfo.forEach((item, i) => {
        this.getServiceForm(item.serviceId).patchValue({
          enabled: item.enabled,
          service: item.service,
          serviceId: item.serviceId,
          differentHours: item.differentHours,
          description: item.description,
          hours: {
            sunday: item.hours.sunday,
            monday: item.hours.monday,
            tuesday: item.hours.tuesday,
            wednesday: item.hours.wednesday,
            thursday: item.hours.thursday,
            friday: item.hours.friday,
            saturday: item.hours.saturday,
          }
        })
        this.getServiceCheckbox(item.serviceId).patchValue(item.enabled);
      })
    }
  }
}
