import { Component } from '@angular/core';
import { Registration } from '../Models/registration';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    reg:Registration = new Registration();

    Submit(){
      console.log(this.reg);
    }
}
