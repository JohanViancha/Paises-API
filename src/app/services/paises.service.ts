import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  Url: string;

  constructor(private httpClient: HttpClient) {
    this.Url = 'https://restcountries.com/v3.1';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any | any[]>(`${this.Url}/all`).toPromise().catch(()=>{
      console.log('Error al acceder a la API (All)')
    });
  }

  getForRegion(region: string): Promise<any[]> {
    return this.httpClient
      .get<any | any[]>(`${this.Url}/region/${region}`)
      .toPromise().catch(()=>{console.log('Error al acceder a la API (Region)')});
  }

  getForLanguage(language: string): Promise<any[]> {
    return this.httpClient
      .get<any | any[]>(`${this.Url}/lang/${language}`)
      .toPromise().catch((err)=>{console.log('Error al acceder a la API (Lan)')});
  }

  getForMOneda(moneda: string): Promise<any[]> {

    return this.httpClient
      .get<any| any[]>(`${this.Url}/currency/${moneda}`)
      .toPromise().catch(()=>{console.log('Error al acceder a la API (Currency)')});
  }
}
