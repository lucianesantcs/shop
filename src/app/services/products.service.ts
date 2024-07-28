import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiService = inject(ApiService);

  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    return this.apiService.get<Products>(url, {
      params,
      responseType: 'json',
    });
  };
}
