import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private routes: Router) {

  }
  ngOnInit(){
    
  }
    Images = [
      {
        src:'../assets/Images/image1.jpg',
        alt:'image1',
        title:'Watermelon Juice',
        desc:'sdfgf',
        button:'Read more'
      },
      {
        src:'../assets/Images/image2.jpg',
        alt:'image2',
        title:'Watermelon Juice',
        desc:'dvfdgfnhgm',
        button:'Read more',
        data:'fade-right'
      },
      {
        src:'../assets/Images/image3.jpg',
        alt:'image3',
        title:'Watermelon Juice',
        desc:'dfgfnhg',
        button:'Read more',
        data:'fade-left'
      },
      {
        src:'../assets/Images/image4.jpg',
        alt:'image2',
        title:'lemon Juice',
        desc:'dvfdgfnhgm',
        button:'Read more',
      
      },
    ]
    onclick(){
      this.routes.navigateByUrl('login')
    }
}
