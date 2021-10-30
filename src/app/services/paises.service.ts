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
    return this.httpClient.get<any[]>(`${this.Url}/all`).toPromise();
  }

  getForRegion(region: string): Promise<any[]> {
    return this.httpClient
      .get<any[]>(`${this.Url}/region/${region}`)
      .toPromise();
  }

  getForLanguage(language: string): Promise<any[]> {
    console.log(language);
    return this.httpClient
      .get<any[]>(`${this.Url}/lang/${language}`)
      .toPromise();
  }

  getForMOneda(moneda: string): Promise<any[]> {

    return this.httpClient
      .get<any[]>(`${this.Url}/currency/${moneda}`)
      .toPromise();
  }
}
