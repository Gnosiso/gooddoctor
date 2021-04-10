declare var require: any;

import { Component, OnInit } from '@angular/core';
// import { otpGenerator } from 'otp-generator';
let otpGenerator = require('otp-generator');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public otp: string ="";

  constructor() { }

  ngOnInit(): void {
    this.otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });

  }

}
