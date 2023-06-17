import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MilkshakeslistserviceService } from '../Services/milkshakeslistservice.service';
import { Milkshakeslist } from '../Models/milkshakeslist';

@Component({
  selector: 'app-productdetails1',
  templateUrl: './productdetails1.component.html',
  styleUrls: ['./productdetails1.component.css']
})
export class Productdetails1Component {
  details!:Milkshakeslist
  constructor(
    private activatedRoute: ActivatedRoute,
    private milkshakeslistservices:MilkshakeslistserviceService,
    private router:Router
  ){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.details=milkshakeslistservices.getMilkshakeslistId(params['id']);
      }
    })
  }
  ngOnInit():void{}

}
