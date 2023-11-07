import {Component, NgIterable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magic-ice';
  cards = [1,1,1,1,1,1,1,1];
}
