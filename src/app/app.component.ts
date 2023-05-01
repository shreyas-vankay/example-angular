import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('expansionAnimation', [
      transition(':enter', [animate('100ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  title = 'sample-project';
  states = ['triage', 'screened', 'monitoring'];
  state_cards = new Map([
    ['triage', ['patient 1', 'patient 2']],
    ['screened', ['patient 3', 'patient 4']],
    ['monitoring', ['patient 5', 'patient 6']],
  ]);
  expanded = false;
  expanded_col!: string;

  myClick = (state: string) => {
    this.expanded = !this.expanded;
    this.expanded_col = state;
  };

  tabClick = (event: string) => {
    this.expanded_col =
      this.states.find((state) => state == event) || this.expanded_col;
  };

  getColSpan = (state: string) => {
    if (this.expanded) {
      return this.expanded_col == state ? 3 : 0;
    } else {
      return 1;
    }
  };
}
