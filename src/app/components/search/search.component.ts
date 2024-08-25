import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../models/countries.model';
import { SearchCommunicationService } from '../../services/search-communication.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchCountrieResult = new EventEmitter<Countries[]>();
  searchCountrie = '';

  constructor(
    private countriesService: CountriesService,
    private searchCommunicationService: SearchCommunicationService
  ) {}

  searchCountrieByName() {
    if (this.searchCountrie) {
      this.countriesService
        .getCountryByName(this.searchCountrie)
        .subscribe((results) => {
          this.searchCommunicationService.emitSearchResults(results); // Emite os resultados para o componente pai
        });
    } else {
      this.countriesService.getAllCountries().subscribe((results) => {
        this.searchCommunicationService.emitSearchResults(results); // Emite todos os países caso o campo de busca esteja vazio
      });
    }
  }
}
