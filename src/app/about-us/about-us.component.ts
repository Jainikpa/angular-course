import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  myForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(''),
      ]),
      number: new FormControl(null, Validators.min(18)),
      address: new FormControl(),
      dob: new FormControl(),
      email: new FormControl(),
      gender: new FormControl('male'),
      password: new FormControl(),
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
