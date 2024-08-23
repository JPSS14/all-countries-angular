import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Countries } from '../models/countries.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getAllCountries() {
    return this.httpClient.get<Countries[]>(`${this.url}/all`);
  }
}
