import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(): Observable<boolean>{
    return this.authService.isLogged().pipe(tap(logged=>{
        if(!logged){
          this.router.navigate(['/auth/login']);
          return false;
        }
    }))
  }
  
}
