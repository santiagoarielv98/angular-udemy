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

  searchCapital(capitalName: string): Observable<Country[]> {
    return this.search('capital', capitalName);
  }

  searchName(name: string): Observable<Country[]> {
    return this.search('name', name);
  }

  searchRegion(regionName: string): Observable<Country[]> {
    return this.search('region', regionName);
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    return this.search('alpha', alphaCode).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  private search(endpoint: string, q: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${endpoint}/${q}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
