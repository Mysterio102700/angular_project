import { Component } from '@angular/core';
import { Juiceslist } from '../Models/juiceslist';
import { JuiceslistserviceService } from '../Services/juiceslistservice.service';

@Component({
  selector: 'app-juiceslist',
  templateUrl: './juiceslist.component.html',
  styleUrls: ['./juiceslist.component.css']
})
export class JuiceslistComponent {

  juiceslist!:Juiceslist[];

  constructor(private services:JuiceslistserviceService){}

  ngOnInit(){
    this.services.getjuiceslist().subscribe(data => this.juiceslist = data)
  }

}
