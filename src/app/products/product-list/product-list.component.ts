import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MobileService } from '../../services/mobile.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _filterString:string;
  
  get filterString(){
    return this._filterString;
  }
  set filterString(filter:string){
   // this._filterString=filter;
 // this.filterProd=this.products.filter(product=>product.productname.toLowerCase().includes(this._filterString.toLowerCase()));
this.products
.pipe(
  map(obj=>obj.filter(obj=>obj.productname.toLowerCase().includes(filter.toLowerCase())))
).subscribe(data=>this.filterProd=data)
  }
  filterProd:Product[]=[];
  products:Observable<Product[]>;
  message:string;
  onratingClick(str:string){
this.message=str;
  }
  constructor(private mobileservice:MobileService) { }
  onset(){
    this.mobileservice.adddata();
  }
  //servicevalue:Observable<number>;
 // ongetvalue(){
   // this.servicevalue=this.mobileservice.getvalue();
  //}
 
  ngOnInit(): void {
    //this.products=this.mobileservice.getAllMobiles();
    //this.mobileservice.getAllMobiles().subscribe(data=>this.products=data);
   // this.filterProd=this.products;
    //this.mobileservice.numsubject.subscribe(data=>this.servicevalue=data);
   // this.servicevalue=this.mobileservice.numsubject;
   this.products=this.mobileservice.getAllMobiles();
   this.products.subscribe(data=>this.filterProd=data);
   
   

  }

}
