import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juiceslist } from '../Models/juiceslist';

@Injectable({
  providedIn: 'root'
})
export class JuiceslistserviceService {

  BaseUrl='assets/Data/Juices.json'

  constructor(private http:HttpClient) { }
  ngOnInit():void{}

  getjuiceslist():Observable<Juiceslist[]>{
      return this.http.get<Juiceslist[]>(`${this.BaseUrl}`)
  }


  
  
  

}
