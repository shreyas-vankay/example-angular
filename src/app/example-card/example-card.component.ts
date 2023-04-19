import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-card',
  templateUrl: './example-card.component.html',
  styleUrls: ['./example-card.component.css'],
})
export class ExampleCardComponent {
  @Input() patient!: string;
}
