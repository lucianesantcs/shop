import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options);
  }
}
