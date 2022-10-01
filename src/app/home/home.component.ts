import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string = '';
  number: number = 0;
  address: string = '';
  email: string = '';
  gender: string = '';
  dob: string = '';
  country: string = '';
  agree: boolean = false;
  password: string = '';
  isMyInputDisable = false;
  myInputValue = ' Patel';
  myType = 'text';
  type = 'password';
  constructor(public router: Router) {}

  ngOnInit(): void {}

  goToAboutus() {
    console.log('Button Clicked');
    this.router.navigateByUrl('about-us');
  }

  onClickMe(msg: string, msg2?: string) {
    console.log('Click me', msg, msg2);
  }

  onSubmitClick() {
    console.log('form values ');

    console.log('Name :-', this.name);
    console.log('Mobile Number : -', this.number);
    console.log('addresss: -', this.address);
    console.log('email : -', this.email);
    console.log('Gender : -', this.gender);
    console.log('dob : -', this.dob);
    console.log('password : -', this.password);

    console.log('agree : -', this.agree);
    console.log('Country : -', this.country);
  }
}
