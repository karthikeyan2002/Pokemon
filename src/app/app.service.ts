import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, sample } from 'rxjs';
import { LiteralPrimitive } from '@angular/compiler';
import { offset } from '@popperjs/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
   constructor(private http: HttpClient) {}

  getData(fetch:any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'?limit=20&'+'offset='+fetch);
  }

}
