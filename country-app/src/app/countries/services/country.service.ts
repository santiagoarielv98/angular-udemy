import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(q: string): Observable<Country[]> {
    return this.search('capital', q);
  }

  searchName(q: string): Observable<Country[]> {
    return this.search('name', q);
  }

  searchRegion(q: string): Observable<Country[]> {
    return this.search('region', q);
  }

  searchCountryByAlphaCode(q: string): Observable<Country | null> {
    return this.search('alpha', q).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null))
    );
  }

  private search(endpoint: string, q: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${endpoint}/${q}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
