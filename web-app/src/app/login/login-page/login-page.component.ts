import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public username: string;
  public password: string;
  constructor() { }

  ngOnInit(): void {
  }

  logout() {

  }
  login() {

  }
}
