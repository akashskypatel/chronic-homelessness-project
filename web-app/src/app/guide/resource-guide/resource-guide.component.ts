import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-resource-guide',
  templateUrl: './resource-guide.component.html',
  styleUrls: ['./resource-guide.component.scss']
})
export class ResourceGuideComponent implements OnInit {

  constructor(httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

}
