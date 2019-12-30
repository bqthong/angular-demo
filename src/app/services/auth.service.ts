import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(){
    localStorage.setItem('token', "fake_access_token");
    this.router.navigate(['/dashboard']);
  }

  public isLoggedIn(){
    return !!localStorage.getItem('token');

  }

  public logout(){
    localStorage.removeItem('token');
  }
}
