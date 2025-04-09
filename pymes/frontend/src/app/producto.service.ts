import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private baseUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  buscarPorCodigo(codigoQR: string) {
    return this.http.get(`${this.baseUrl}/codigo/${codigoQR}`);
  }

  crearProducto(producto: any) {
    return this.http.post(this.baseUrl, producto);
  }
}
