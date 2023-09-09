import { Component } from '@angular/core';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-other-section',
  templateUrl: './other-section.component.html',
  styleUrls: ['./other-section.component.css'],
})
export class OtherSectionComponent {
  constructor(private otherService: OtherService) {}
  datas = this.otherService.getAllData;
}
