import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
 // starIcon=faStar;
  //starwidth:number;
 @Input() rating:number;
 @Output() ratingClick =new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    //this.starwidth=this.rating * 16;
  }
  onclick(){
this.ratingClick.emit(`product rating : ${this.rating}`);
  }

}
