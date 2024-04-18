import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interfaces';
import { Country } from '../interfaces/country.interfaces';
import { Region } from '../interfaces/region.types';

const initialValues: CacheStore = {
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

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = initialValues;

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  searchCapital(capitalName: string): Observable<Country[]> {
    return this.search('capital', capitalName).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { search: capitalName, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchName(countryName: string): Observable<Country[]> {
    return this.search('name', countryName).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { search: countryName, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(regionName: Region): Observable<Country[]> {
    return this.search('region', regionName).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = { search: regionName, countries })
      ),
      tap(() => this.saveToLocalStorage())
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

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    const cacheStore = localStorage.getItem('cacheStore');

    if (cacheStore || cacheStore !== null) {
      try {
        this.cacheStore = JSON.parse(cacheStore);
      } catch (error) {
        this.cacheStore = initialValues;
      }
    }
  }
}
