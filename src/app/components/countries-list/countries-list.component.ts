import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../models/countries.model';
import { CardCountrieComponent } from '../card-countrie/card-countrie.component';
import { SearchComponent } from '../search/search.component';
import { SearchCommunicationService } from '../../services/search-communication.service';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CardCountrieComponent, SearchComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css',
})
export class CountriesListComponent {
  countriesList: Countries[] = [];

  constructor(
    private countriesService: CountriesService,
    private searchCommunicationService: SearchCommunicationService
  ) {}

  ngOnInit() {
    this.getInitialCountries();

    this.searchCommunicationService.searchResults$.subscribe(
      (results: Countries[]) => {
        this.updateCountrieList(results);
      }
    );
  }

  getInitialCountries() {
    this.countriesService
      .getAllCountries()
      .subscribe((countries) => (this.countriesList = countries));
  }

  updateCountrieList(results: Countries[]) {
    this.countriesList = results;
  }
}
