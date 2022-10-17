import { Injectable } from '@angular/core';
import moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  formatDateString(dateString: string, format_string: string) {
    return moment(new Date(dateString)).local().format(format_string);
  }

  generateUUID() {
    return crypto.randomUUID();
  }
}
