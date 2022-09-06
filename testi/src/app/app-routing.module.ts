import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestiComponent } from './testi/testi.component';

const routes: Routes = [
  
  {
    path:"",redirectTo:"login",pathMatch:"full"
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"restaurant",component:TestiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
