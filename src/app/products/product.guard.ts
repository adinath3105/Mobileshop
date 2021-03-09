import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
 
      const id=+route.paramMap.get('id');
      if(isNaN(id)|| id < 101 || id > 103){
        alert('invalid product id');
        this.router.navigate(['/products']);
        return false;
      }
        return true;
  }
  
}
