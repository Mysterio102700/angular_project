import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Milkshakeslist } from '../Models/milkshakeslist';

@Injectable({
  providedIn: 'root'
})
export class MilkshakeslistserviceService {
  getmilkshakes() {
    throw new Error('Method not implemented.');
  }

  BaseUrl='assets/Data/Milkshakes.json'

  constructor(private http:HttpClient) { }
  ngOnInit():void{}

  getMilkshakeslist():Observable<Milkshakeslist[]>{
      return this.http.get<Milkshakeslist[]>(`${this.BaseUrl}`)
  }
}
