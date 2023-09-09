import { Injectable } from '@angular/core';
import { Card } from '../Models/Card';
@Injectable({
  providedIn: 'root',
})
export class OurProductService {
  ourProduct: Card[] = [
    {
      img: 'assets/images/image7.png',
      content: 'Spread Collar Shirt',
      price: 48.99,
      rating: 4.9,
    },
    {
      img: 'assets/images/image2.png',
      content: 'White Solid Formal Shirt',
      price: 39.0,
      rating: 4.8,
    },
    {
      img: 'assets/images/image8.png',
      content: 'Shine On Me Blouse',
      price: 42.99,
      rating: 4.7,
    },
    {
      img: 'assets/images/image11.png',
      content: 'Gray Solid Padded Jacket',
      price: 42.99,
      rating: 4.6,
    },
    {
      img: 'assets/images/image5.png',
      content: 'Printed Loose T-shirt',
      price: 39.99,
      rating: 4.9,
    },
    {
      img: 'assets/images/image6.png',
      content: 'Summer Wind Crop Shirt',
      price: 39.95,
      rating: 4.6,
    },
    {
      img: 'assets/images/image4.png',
      content: 'Spread Collar Shirt',
      price: 48.99,
      rating: 4.9,
    },

    {
      img: 'assets/images/image10.png',
      content: 'Solid Round Neck T-shirt',
      price: 36.0,
      rating: 4.9,
    },
  ];
  getAllCards: Card[] = this.ourProduct;
}
