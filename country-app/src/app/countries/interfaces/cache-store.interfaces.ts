import { Country } from './country.interfaces';
import { Region } from './region.types';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: TermCountries<Region>;
}

export interface TermCountries<T = string> {
  search: T | '';
  countries: Country[];
}
