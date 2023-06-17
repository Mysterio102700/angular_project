import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    public name = 'Remanth'
    public Date = new Date()
    
    constructor(private routes:Router){}

    ngOnInit():void{}

    onclick(){
      this.routes.navigateByUrl('productdetails1')
    }

}
