import { Component, Input } from '@angular/core';
import { Countries } from '../../models/countries.model';

@Component({
  selector: 'app-card-countrie',
  standalone: true,
  imports: [],
  templateUrl: './card-countrie.component.html',
  styleUrl: './card-countrie.component.css',
})
export class CardCountrieComponent {
  @Input() item!: Countries;
}
