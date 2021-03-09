import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../products/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  mobiles:Product[]=[];
//httpurl='http://localhost:4200/assets/product.json';
httpurl='assets/product.json';
  constructor(private httpclient:HttpClient) { }
  getAllMobiles():Observable<Product[]>{
  return  this.httpclient.get<Product[]>(this.httpurl);
   // return of(this.mobiles);
  }

  getProduct(id:number):Observable<Product>{
    return this.httpclient.get<Product[]>(this.httpurl)
    .pipe(
      map(res=>res.find(p=>p.productid===id))
    );

  }
/*
  value=0;
  getvalue(){
    return this.value;
  }
  setvalue(){
    this.value++;
    
  }*/

  value=1;
  numsubject=new Subject<number>();

  adddata(){
    this.numsubject.next(this.value++);
  }

}
