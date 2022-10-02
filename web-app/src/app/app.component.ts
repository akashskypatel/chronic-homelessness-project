import { Component, OnDestroy} from '@angular/core';

/** @title Orlando Service Guide */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Orlando Service Guide';

  ngOnDestroy(): void {

  }
}
