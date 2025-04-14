import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-books',
  templateUrl: './latest-books.component.html',
  styleUrls: ['./latest-books.component.css']
})
export class LatestBooksComponent {
  books = [
    {
      image: 'assets/images/C4.jpg',
      title: 'أطالس',
      url: 'https://youtube.com/watch?v=abc123'
    },
    {
      image: 'assets/images/C3.jpg',
      title: 'أطالس',
      url: 'https://youtube.com/watch?v=def456'
    },
    {
      image: 'assets/images/C4.jpg',
      title: 'أطالس',
      url: 'https://youtube.com/watch?v=abc123'
    },
    {
      image: 'assets/images/C3.jpg',
      title: 'أطالس',
      url: 'https://youtube.com/watch?v=def456'
    }
  ];
  
}
