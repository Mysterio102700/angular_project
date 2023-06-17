import { Component } from '@angular/core';
import { Registration } from '../Models/registration';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  reg: Registration = new Registration();

  registrationsform!: FormGroup;
  constructor(private formbuild: FormBuilder) {}

  ngOnInit() {
 

      
 
  
    this.registrationsform = this.formbuild.group({
      Username: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(6),
          Validators.pattern('([a-zA-Z0-9])'),
        ])
      ),
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
    });
  }

  Submit() {
    console.log(this.reg);
  }
}
