import { Component } from '@angular/core';
import { Mocktailslist } from '../Models/mocktailslist';
import { ActivatedRoute, Router } from '@angular/router';
import { MocktailslistserviceService } from '../Services/mocktailslistservice.service';

@Component({
  selector: 'app-productdetails2',
  templateUrl: './productdetails2.component.html',
  styleUrls: ['./productdetails2.component.css']
})
export class Productdetails2Component {
  details!:Mocktailslist;
  constructor(
    private activatedRoute:ActivatedRoute,
    private mocktailslistservice:MocktailslistserviceService,
    private route:Router
  ) { 
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.details=mocktailslistservice.getMocktailslistId(params['id']);
      }
    })
  }

}
