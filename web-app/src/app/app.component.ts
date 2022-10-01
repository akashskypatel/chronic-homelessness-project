import { Component, OnDestroy} from '@angular/core';

/** @title Chronic Homelessness App */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Chronic Homelessness App';

  ngOnDestroy(): void {

  }
}
