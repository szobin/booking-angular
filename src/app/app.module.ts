import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { BookingViewComponent } from './booking-view/booking-view.component';
import {FooterComponent} from './footer/footer.component';
import {BookingService} from './service/booking.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
