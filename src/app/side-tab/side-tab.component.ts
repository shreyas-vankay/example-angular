import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.css'],
})
export class SideTabComponent implements OnChanges {
  @Input() expanded_col!: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  initStates = new Set(['triage', 'screened', 'monitoring']);
  states = new Set<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.states = new Set(
      [...this.initStates].filter((x) => x != this.expanded_col)
    );
  }
  clickButton = (state: string) => {
    this.buttonClicked.emit(state);
  };
}
