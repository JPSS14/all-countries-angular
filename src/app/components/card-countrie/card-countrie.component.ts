import { Component, Input } from '@angular/core';
import { Countries } from '../../models/countries.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-countrie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-countrie.component.html',
  styleUrl: './card-countrie.component.css',
})
export class CardCountrieComponent {
  @Input() item!: Countries;
}
