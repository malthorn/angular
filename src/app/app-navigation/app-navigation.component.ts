import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css'],
})
export class AppNavigationComponent {
  tabs = [];
  selected = new FormControl(0);

  addTab(tabname: string) {
    this.tabs.push(tabname);
    this.selected.setValue(this.tabs.length);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
