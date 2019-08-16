import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  invalidLogin: boolean = null;
  constructor(private authService: AuthService,
    private jwtHelper: JwtHelperService,
    private router: Router) { }

  canActivate() {
    var token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.authService.isLoggedIn.next(true);
      return true;
    }
    this.authService.isLoggedIn.next(false);
    this.router.navigate(["auth"]);
    return false;
  }
}
