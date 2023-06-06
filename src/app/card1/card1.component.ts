import { Component } from '@angular/core';
import { FoodserviceService } from '../Services/foodservice.service';
import { Foods } from '../Models/foods';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {

  public foods!:Foods[];
    constructor(private service:FoodserviceService){}

    ngOnInit(){
      this.service.getfoods().subscribe(data => this.foods=data);
    }
}
