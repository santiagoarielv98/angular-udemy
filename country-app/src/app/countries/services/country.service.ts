import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interfaces';
import { Country } from '../interfaces/country.interfaces';
import { Region } from '../interfaces/region.types';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {
      search: '',
      countries: [],
    },
    byRegion: {
      search: '',
      countries: [],
    },
    byCountries: {
      search: '',
      countries: [],
    },
  };

  constructor(private http: HttpClient) {}

  searchCapital(capitalName: string): Observable<Country[]> {
    return this.search('capital', capitalName).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { search: capitalName, countries })
      )
    );
  }

  searchName(countryName: string): Observable<Country[]> {
    return this.search('name', countryName).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { search: countryName, countries })
      )
    );
  }

  searchRegion(regionName: Region): Observable<Country[]> {
    return this.search('region', regionName).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = { search: regionName, countries })
      )
    );
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
