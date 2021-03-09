import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGuard } from './product.guard';

const routes :Routes =[
  {path:'products',component:ProductListComponent},
  {path:'products/:id',canActivate:[ProductGuard],component:DetailComponent},

]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class ProductRoutingModule { }
