import { Component, Input } from '@angular/core';

@Component({
  selector: 'dinaro-data-card',
  templateUrl: 'data-card.component.html',
  styleUrls: ['data-card.component.scss'],
})
export class DataCardComponent {
  @Input() data: string | number | null | undefined;
  @Input() label: string | undefined;
}
