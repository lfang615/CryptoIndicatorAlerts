import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  invalidLogin: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(response => {
        let token = (<any>response).token;
        localStorage.setItem('jwt', token);
        this.invalidLogin = false;
        this.router.navigate(["bitmex"]);
      }, err => {
        this.invalidLogin = true;
      })
  }

  
}
