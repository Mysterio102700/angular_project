import { Component } from '@angular/core';
import { JuicesservicesService } from '../Services/juicesservices.service';
import { Juices } from '../Models/juices';


@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {
  public juices!:Juices[];

 constructor(private service:JuicesservicesService){}
 
 ngOnInit():void{
  this.service.getjucies().subscribe(data => this.juices = data)
 }
}
