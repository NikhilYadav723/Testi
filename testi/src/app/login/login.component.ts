import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required  ],
      password: [''],
    });
  }
  logIn() {
    this._http.get<any>('http://localhost:3003/signup').subscribe(
      (res) => {
        let user = res.find((a: any) => {
          // console.log(a.email);
          // console.log(this.loginForm.value.email)
          // console.log( a.password)
          // console.log(this.loginForm.value.password)
          console.log(a);
          console.log(this.loginForm.value);
          return (
            a.email === this.loginForm.value.email&&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login is Successful');
          this.loginForm.reset();
          this.router.navigate(['restaurant']);
        } else {
          alert('user Not found !!');
        }
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
}
