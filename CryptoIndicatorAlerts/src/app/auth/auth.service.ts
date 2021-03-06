import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Injectable()
export class AuthService implements OnDestroy {
  invalidLogin: boolean = null;
  isLoggedIn = new Subject<boolean>();

  constructor(private httpClient: HttpClient,
    private router: Router) {

  }

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    return this.httpClient.post("/api/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
   
  }

  logout() {
    localStorage.removeItem('jwt');
    this.isLoggedIn.next(false);
  }

  ngOnDestroy() {
   
  }
}
