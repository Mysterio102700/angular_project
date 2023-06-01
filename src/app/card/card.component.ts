import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
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
        button:'Read more'
      },
      {
        src:'../assets/Images/image3.jpg',
        alt:'image3',
        title:'Watermelon Juice',
        desc:'dfgfnhg',
        button:'Read more'
      },
      {
        src:'../assets/Images/image4.jpg',
        alt:'image2',
        title:'lemon Juice',
        desc:'dvfdgfnhgm',
        button:'Read more'
      },
       {
        src:'../assets/Images/image5.jpg',
        alt:'image2',
        title:'Mango Juice',
        desc:'dvfdgfnhgm',
        button:'Read more'
      },
      {
        src:'../assets/Images/image6.jpg',
        alt:'image2',
        title:'Orange Juice',
        desc:'dvfdgfnhgm',
        button:'Read more'
      },
      {
        src:'../assets/Images/image7.jpg',
        alt:'image2',
        title:'Pineapple Juice',
        desc:'dvfdgfnhgm',
        button:'Read more'
      },
    ]
}
