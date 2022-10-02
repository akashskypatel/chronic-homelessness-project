import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {
  @Input()
  public serviceTitle: string = '*SERVICE TITLE*';
  @Input()
  public cardId: string = '*ID*';
  @Input()
  public showCard: boolean = false;
  public showHours: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleHours(event: any) {
    this.showHours = !this.showHours;
  }

  toggleCard() {
    this.showCard = !this.showCard;
  }

}
