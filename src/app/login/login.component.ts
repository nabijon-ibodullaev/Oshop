import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private AuthService: AuthService
  ) {}

  ngOnInit() {}
  login(form: NgForm) {
    this.AuthService.login(form.value).subscribe(
      (res) => {
        console.log(res);
        console.log(form);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
