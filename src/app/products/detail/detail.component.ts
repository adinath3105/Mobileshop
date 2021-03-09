import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MobileService } from '../../services/mobile.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product:Observable<Product>;
  productid:number;

  constructor(private route:ActivatedRoute,
    private serv:MobileService,
    private router:Router) { }

  ngOnInit(): void {
    //const id=+this.route.snapshot.paramMap.get('id');
   // this.productid=id;
   // console.log(id);
//this.serv.getProduct(id).subscribe(data=>this.product=data);
//this.product=this.serv.getProduct(this.productid);
this.route.paramMap.subscribe(param=>{
  const id=+param.get('id');
   this.productid=id;
    this.product=this.serv.getProduct(this.productid);
  
});
  }
  onback(){
this.router.navigate(['/products']);
  }
  onprev(){
    this.productid--;
    this.router.navigate(['/products',this.productid]);
  }
  onnext(){
this.productid++;
this.router.navigate(['/products',this.productid]);
  }

}
