import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private url: string = "http://localhost:8080/api/v1/";
  private agencies: string = "agency";
  public getAgenciesUrl() {
    return this.url + this.agencies;
  }
  public postAgencyUrl() {
    return this.url + this.agencies;
  }
  public putAgencyUrl() {
    return this.url + this.agencies;
  }
  public getAgencyByNameUrl(name: string) {
    return this.url + this.agencies + "/name/" + encodeURI(name);
  }
  public getAgencyByIdUrl(id: string) {
    return this.url + this.agencies + "/id/" + encodeURI(id);
  }
  public deleteAgency(id: string) {
    return this.url + this.agencies + "/id/" + encodeURI(id);
  }
}
