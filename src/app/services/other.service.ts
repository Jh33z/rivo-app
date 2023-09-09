import { Injectable } from '@angular/core';
import { Card } from '../Models/Card';

@Injectable({
  providedIn: 'root',
})
export class OtherService {
  datas: Card[] = [
    {
      img: 'assets/images/other1.png',
      content: 'Accessories',
      description:
        'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
    },
    {
      img: 'assets/images/other2.png',
      content: 'Dresses',
      description:
        'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
    },
    {
      img: 'assets/images/other3.png',
      content: 'Outerwear',
      description:
        'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
    },
  ];
  getAllData = this.datas;
}
