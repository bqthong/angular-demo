import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginForm: any = {};

  onLogin() { 
    console.log(this.loginForm);
    this.authService.login();
  }

  ngOnInit() {
  }

}
