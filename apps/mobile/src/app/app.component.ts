import { Component } from '@angular/core';
import * as localforage from 'localforage';

@Component({
  selector: 'dinaro-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    localforage.config({ name: 'dinaro' });
  }
}
