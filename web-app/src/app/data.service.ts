import { Injectable } from '@angular/core';
import { Api } from '../data/api';
import { Agency } from '../data/models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private api: Api) { }

  public getAgencies() {
    return this.http.get<Agency[]>(this.api.getAgenciesUrl()).pipe(catchError(this.handleError));
  }

  public getAgencyByName(name: string) {
    return this.http.get<Agency[]>(this.api.getAgencyByNameUrl(name)).pipe(catchError(this.handleError));
  }

  public getAgencyById(id: string) {
    return this.http.get<Agency>(this.api.getAgencyByIdUrl(id)).pipe(catchError(this.handleError));
  }

  public addAgency(data: Agency) {
    return this.http.post<any>(this.api.postAgencyUrl(), data, httpOptions);//.pipe(catchError(err => this.handleError(err)));
  }

  public updateAgency(data: Agency) {
    return this.http.put<Agency>(this.api.putAgencyUrl(), data, httpOptions);//.pipe(catchError(err => this.handleError(err)));
  }

  public deleteAgency(id: string) {
    return this.http.delete<Agency>(this.api.deleteAgency(id)).pipe(catchError(err => this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
