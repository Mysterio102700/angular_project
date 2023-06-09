import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juices } from '../Models/juices';

@Injectable({
  providedIn: 'root'
})
export class JuicesservicesService {

  BaseUrl='assets/Data/food.json'

  constructor(private http:HttpClient) { }

  getjucies():Observable<Juices[]>{
    return this.http.get<Juices[]>(`${this.BaseUrl}`)
  }
}