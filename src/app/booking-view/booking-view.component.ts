import { Component, OnInit } from '@angular/core';
import {BookingService, PropertyData} from '../service/booking.service';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.component.html',
  styleUrls: ['./booking-view.component.css']
})
export class BookingViewComponent implements OnInit {
  propertyPhoto = {
    src: 'blank'
  };
  propData: PropertyData = {
    name: 'N/A',
    descr: '-',
    image_url: '',
    base_price: ''
  };

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): any {
    this.loadProperty();
  }

  loadProperty() {
      this.bookingService.getProperty().subscribe((data: PropertyData) => {
        this.propData = {
          name: data.name,
          descr: data.descr,
          image_url: data.image_url,
          base_price: data.base_price
        };
        console.log(this.propData);
        this.propertyPhoto.src = this.propData.image_url;
      });
  }

}
