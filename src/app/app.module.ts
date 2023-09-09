import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { CardComponent } from './our-products/card/card.component';
import { ExclusiveOfferComponent } from './exclusive-offer/exclusive-offer.component';
import { OtherSectionComponent } from './other-section/other-section.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    BestSellingComponent,
    OurProductsComponent,
    CardComponent,
    ExclusiveOfferComponent,
    OtherSectionComponent,
    FeedbackComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
