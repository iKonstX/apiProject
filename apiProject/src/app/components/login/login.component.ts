import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private name: string;
  private password: string;
  constructor(private toastr: ToastrService, private http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  doLogin(login: NgForm) {
    this.http.post("http://localhost:3000/Users/auth", JSON.stringify(login.value), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    }).subscribe((response) => {
      const responseBody = response.body[0];
      localStorage.setItem("ngSession", JSON.stringify(responseBody));
      this.toastr.success('Login successfull. Redirecting...')
      this.router.navigate(['dashboard']);

    }, error => {
      if (error.status === 403) {
        this.toastr.error('Incorrect login information. Please try again.')
      }
    })
  }

  forgotPassword() {
    this.toastr.error("That's too bad :(")
  }

}
