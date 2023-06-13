import { Component } from '@angular/core';
import { MilkshakeslistserviceService } from '../Services/milkshakeslistservice.service';
import { Milkshakeslist } from '../Models/milkshakeslist';

@Component({
  selector: 'app-milkshakeslist',
  templateUrl: './milkshakeslist.component.html',
  styleUrls: ['./milkshakeslist.component.css']
})
export class MilkshakeslistComponent {
  milkshakeslist!:Milkshakeslist[]
constructor(private services:MilkshakeslistserviceService){}

ngOnInit():void{
  this.services.getMilkshakeslist().subscribe(data => this.milkshakeslist = data)
}

}
