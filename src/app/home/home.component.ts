import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  yelpForm: FormGroup;
  searchResults: Object;
  item: Object;

  constructor(private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
    this.yelpForm = this.fb.group({
      price: new FormControl(),
      location: new FormControl()
    })
  }

 async onSearchSubmit() {
    console.log(this.yelpForm.value.location)
    console.log(this.yelpForm.value.price)
    
    await this.searchService.getSearch(
      event,
      this.yelpForm.value.location,
      this.yelpForm.value.price
      ).subscribe(
        data => {
          console.log(data)
          this.searchResults = data.businesses[Math.floor(Math.random() * 10)]
          console.log(this.searchResults)
          // let item = this.searchResults.next()businesses[Math.floor(Math.random()*businesses.length)];
        }
      )
  }
  

}
