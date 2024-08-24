import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Countries } from '../models/countries.model';

@Injectable({
  providedIn: 'root',
})
export class SearchCommunicationService {
  private searchResultsSource = new Subject<Countries[]>();

  searchResults$ = this.searchResultsSource.asObservable();

  emitSearchResults(results: Countries[]) {
    this.searchResultsSource.next(results);
  }
}
