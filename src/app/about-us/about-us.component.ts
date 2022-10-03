import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  myForm: FormGroup;
  id: any;
  age = 5;
  demoJso = {
    name: {
      fName: 'Jainik',
      lName: 'Patel',
    },
  };

  constructor(private aRoute: ActivatedRoute) {}

  myMethod(value, value2?, value3?) {
    console.log(value, value2, value3);
  }

  ngOnInit(): void {
    console.log(this.demoJso['name']['fName']);

    this.myMethod(1, 2, 3);

    console.log(
      this.age > 18 ? 'you are greater than 18' : ' you are less than 18'
    );

    this.id = this.aRoute?.snapshot?.params?.id;
    console.log('My Id :- ', this.id);
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(''),
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(50),
      ]),
      address: new FormControl(null, [
        Validators.minLength(50),
        Validators.maxLength(100),
      ]),
      dob: new FormControl(),
      email: new FormControl(),
      gender: new FormControl('male'),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      agree: new FormControl(true),
      country: new FormControl(),
    });
  }

  onSubmitClick() {
    console.log('my form value :- ', this.myForm.value);

    console.log('MY form controls - ', this.myForm.controls);
  }

  get form() {
    return this.myForm.controls;
  }
}
