import { Component } from '@angular/core';
import { Login } from '../Models/login';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 login:Login = new Login();

 loginform!:FormGroup;
 constructor(private formbuild:FormBuilder,
  private route:Router){}

 ngOnInit(){
  this.loginform = this.formbuild.group({
    Email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
      ])
    ),
    Password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(8),
        Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
      ])
    ),
  })
 }

 OnLogin(){
  this.route.navigateByUrl('/home'); 
 }
}
