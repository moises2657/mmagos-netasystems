import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthPayloadInterface} from '../shared/interfaces/AuthPayloadInterface';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { LoginResponseInterface } from '../shared/interfaces/LoginResponseInterface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, 
              private http: HttpClient,
              private router: Router) { }


  login( user: string, password: string): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${environment.serverEndPoint}/auth`,{
      email: user,password: password
    },).pipe(tap(response=>{
      if(response.sucefull){
        this.cookieService.set(environment.jwtCookieName,response.token,null,'/',null,false);
        this.router.navigate(['/']);
      }
    }));
  }
  isLogged(): Observable<boolean>{
    const token = this.cookieService.get(environment.jwtCookieName);
    return this.http.post<AuthPayloadInterface>(`${environment.serverEndPoint}/auth/verifyToken`,null,{
      headers: {'access-token':token}
    }).pipe(map(user=> user!=null),catchError((err)=>{
      return of(false);
    }));
  }
}
