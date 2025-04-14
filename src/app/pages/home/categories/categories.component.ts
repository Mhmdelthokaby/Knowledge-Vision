import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryList = [
    {
      image: 'assets/images/C1.jpg',
      title: 'أطالس',
      
    },
    {
      image: 'assets/images/C2.jpeg',
      title: 'موسوعات',
      
    },{
      image: 'assets/images/C3.jpg',
      title: 'تراجم',
      
    },{
      image: 'assets/images/C4.jpg',
      title: 'موجزات ارشادية',
      
    }
    
  ];
  
}
