import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './product-list/star/star.component';
import { DetailComponent } from './detail/detail.component';
import { ReviewComponent } from './detail/review/review.component';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
  ProductListComponent,
  StarComponent,
  DetailComponent,
  ReviewComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
    ]
})
export class ProductsModule { }
