import { HoursFormComponent } from './../hours-form/hours-form.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {
  @Input() public serviceTitle: string;
  @Input() public cardId: string;
  @Input() public showCard: boolean = false;
  @Input() public serviceForm: FormGroup;
  @Input() public hours: FormGroup;
  @ViewChild(HoursFormComponent) public hfComponent!: HoursFormComponent;
  public showHours: boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.hfComponent) {
      this.serviceForm.controls['hours'] = this.hfComponent.hoursForm;
    }
  }

  toggleHours(event: any) {
    this.showHours = !this.showHours;
  }

  toggleCard() {
    this.showCard = !this.showCard;
  }

}
