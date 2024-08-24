import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../models/countries.model';
import { CardCountrieComponent } from '../card-countrie/card-countrie.component';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CardCountrieComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css',
})
export class CountriesListComponent {
  countriesList: Countries[] = [];

  constructor(private countriesService: CountriesService) {
    this.getInitialCountries();
  }

  getInitialCountries() {
    this.countriesService
      .getAllCountries()
      .subscribe((countries) => (this.countriesList = countries));
  }
}
