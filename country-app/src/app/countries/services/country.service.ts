import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(q: string): Observable<Country[]> {
    return this.search(q, 'capital');
  }

  searchName(q: string): Observable<Country[]> {
    return this.search(q, 'name');
  }

  searchRegion(q: string): Observable<Country[]> {
    return this.search(q, 'region');
  }

  private search(q: string, endpoint: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${endpoint}/${q}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
