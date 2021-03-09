import { Component, OnInit } from '@angular/core';
import { review } from 'src/app/products/model/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review=new review();

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log("form submit");
  }

}
