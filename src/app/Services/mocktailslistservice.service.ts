import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mocktailslist } from '../Models/mocktailslist';

@Injectable({
  providedIn: 'root'
})
export class MocktailslistserviceService {
  BaseUrl='assets/Data/Mocktails.json'

  constructor(private http:HttpClient) { }
  ngOnInit():void{}

  getMocktailslist():Observable<Mocktailslist[]>{
      return this.http.get<Mocktailslist[]>(`${this.BaseUrl}`)
  }
}
