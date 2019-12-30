import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(credentials: Object){
    return this.http.post('https://app.fakejson.com/q/d9iWU54u?token=g33aUX1q3zRmPspvUjAiMg', credentials);
  }

  public isLoggedIn(){
    return !!localStorage.getItem('token');

  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
