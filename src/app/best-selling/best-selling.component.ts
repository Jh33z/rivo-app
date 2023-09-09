import { Component } from '@angular/core';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css'],
})
export class BestSellingComponent {
  showAll: boolean = false;
  modelInOutfits = [
    {
      img: 'assets/images/image1.png',
      content: 'Regular Fit Long Sleeve Top',
      price: 38.99,
      rating: 4.9,
    },
    {
      img: 'assets/images/image2.png',
      content: 'Black Crop Tailored Jacket',
      price: 62.99,
      rating: 4.8,
    },
    {
      img: 'assets/images/image3.png',
      content: 'Textured Sunset Shirt',
      price: 49.99,
      rating: 4.9,
    },
    {
      img: 'assets/images/image3.png',
      content: 'Textured Sunset Shirt',
      price: 49.99,
      rating: 4.9,
    },
    {
      img: 'assets/images/image3.png',
      content: 'Textured Sunset Shirt',
      price: 49.99,
      rating: 4.9,
    },
  ];
  displayAll() {
    this.showAll = !this.showAll;
  }
}
