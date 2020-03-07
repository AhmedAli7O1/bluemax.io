import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'link-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('card-icon') icon: IconDefinition;
  @Input('card-title') title: string;
  @Input('card-description') description: string;
  @Input('card-href') href: string;
}
