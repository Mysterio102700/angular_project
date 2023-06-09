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
        id:1,
        src:'../assets/Images/juice.jpg',
        alt:'image1',
        title:'Juices',
        desc:'sdfgf',
        button:'Read more'
      },
      {
        id:2,
        src:'../assets/Images/milkshakes.jpg',
        alt:'image2',
        title:'Milkshakes',
        desc:'dvfdgfnhgm',
        button:'Read more',
        data:'fade-right'
      },
      {
        id:3,
        src:'../assets/Images/mocktails.jpg',
        alt:'image3',
        title:'Mocktails',
        desc:'dfgfnhg',
        button:'Read more',
        data:'fade-left'
      }
    ]
  
}
