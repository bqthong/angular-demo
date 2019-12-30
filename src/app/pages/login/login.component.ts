import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    // Redirect to home if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
  isLoading: Boolean = false;
  loginForm: any = {};

  onLogin() {
    this.isLoading = true;
    this.authService.login(this.loginForm)
      .subscribe((rawRes) => {
        console.log(rawRes);
        localStorage.setItem('token', "fake_access_token");
        this.router.navigate(['/dashboard']);
      }, (errorRes) => console.log(errorRes), () => this.isLoading = false)
  }

  ngOnInit() {
  }

}
