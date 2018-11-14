import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private http: HttpClient) {
   }

  getSearch (e, location, price):Observable<any> {
    e.preventDefault()
    console.log('getSearch() called')
    console.log(location, price);
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&price=${price}&open_now=true`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5hE4AgEqjGHNCM-3cs5ATo8fWvflyDR6C8mmTP42psAz_3lBU1wEXLdtGv-IrOBFgg4jw5Q7ClX4tpd9w1YeeNO2T16o2RYTemiAsIo2BWKWom1obk_RURBDxl7sW3Yx'
      }),
    })
      .pipe()
  }
}
