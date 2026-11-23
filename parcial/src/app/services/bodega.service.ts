import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega } from '../models/bodega.model';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/bodegas';

  listar(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.apiUrl);
  }

  crear(bodega: Bodega): Observable<Bodega> {
    return this.http.post<Bodega>(this.apiUrl, bodega);
  }
}
