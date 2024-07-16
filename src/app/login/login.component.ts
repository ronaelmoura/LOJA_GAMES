import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usermodel = new User("","")
  receberDados(){
      console.log(this.usermodel)
    }
  
  }


