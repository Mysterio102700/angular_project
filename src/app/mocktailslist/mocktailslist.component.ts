import { Component } from '@angular/core';
import { Mocktailslist } from '../Models/mocktailslist';
import { MocktailslistserviceService } from '../Services/mocktailslistservice.service';

@Component({
  selector: 'app-mocktailslist',
  templateUrl: './mocktailslist.component.html',
  styleUrls: ['./mocktailslist.component.css']
})
export class MocktailslistComponent {

  mocktailslist!:Mocktailslist[]

  constructor(private services:MocktailslistserviceService){}

  ngOnInit():void{
    this.services.getMocktailslist().subscribe(data =>this.mocktailslist = data)
  }

}
