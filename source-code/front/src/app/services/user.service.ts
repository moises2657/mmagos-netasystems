import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../shared/interfaces/UserInterface';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private cookieService: CookieService, 
              private http: HttpClient) { }

  getInfo(): Observable<UserInterface>{
    const token = this.cookieService.get(environment.jwtCookieName);
    return this.http.get<UserInterface>(`${environment.serverEndPoint}/user/getInfo`,{
      headers: {'access-token':token}
    }).pipe(catchError((err)=>{
      return of(null);
    }));
  }
}
