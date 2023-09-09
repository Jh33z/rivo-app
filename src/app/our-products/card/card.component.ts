import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/Card';
import { OurProductService } from 'src/app/services/our-product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private ourService: OurProductService) {}
  datas: Card[] = this.ourService.getAllCards;
}
