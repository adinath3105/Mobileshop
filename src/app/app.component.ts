import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MobileService } from './services/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // viewcomp=true;
 cartCount:Observable<number>;
 constructor(private services:MobileService){}
 ngOnInit(){
   this.cartCount=this.services.numsubject;
 }

}
