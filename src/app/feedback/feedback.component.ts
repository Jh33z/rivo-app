import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  datas = [
    {
      name: 'Emily Wilson',
      content:
        "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
    },
    {
      name: 'Sarah Thompson',
      content:
        'I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!',
    },
    {
      name: 'Olivia Martinez',
      content:
        'I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!',
    },
  ];
}
