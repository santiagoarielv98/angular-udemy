import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'https://reqres.in/api/users';
  private http = inject(HttpClient);
  // constructor(private http: HttpClient) {}
  getUserById(id: number): Observable<User> {
    return this.http
      .get<SingleUserResponse>(`${this.baseURL}/${id}`)
      .pipe(map(({ data }) => data));
  }
}
