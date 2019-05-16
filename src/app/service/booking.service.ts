import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface PropertyData {
  name: string;
  descr: string;
  image_url: string;
  base_price: string;
}

@Injectable()
export class BookingService {

    // private SERVICE_URL = 'http://localhost:8000/api/';
    private SERVICE_URL = "http://booking.zobin.org:8000/api/";


    constructor(private http: HttpClient) {
    }

    getProperty() {
        const url = this.SERVICE_URL + 'property/1/';
        return this.http.get<PropertyData>(url);
    }

}


