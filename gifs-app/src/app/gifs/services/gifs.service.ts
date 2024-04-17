import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const GIPHY_API_KEY = '';
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
