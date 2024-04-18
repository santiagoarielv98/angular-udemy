import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(q: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${q}`;
    return this.http.get<Country[]>(url);
  }
}
