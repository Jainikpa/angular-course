import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  marks: number;
  result: string;
  isPassed: boolean = true;
  isVisible = false;
  students = [
    {
      name: 'Rohan',
      age: 25,
    },
    {
      name: 'Jay',
      age: 25,
    },
    {
      name: 'Jeet',
      age: 25,
    },
    {
      name: 'Roshan',
      age: 25,
    },
    {
      name: 'Roshasdfasdfan',
      age: 25,
    },
    {
      name: 'Rogrqwerwshan',
      age: 25,
    },
    {
      name: 'hjghhhj',
      age: 25,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmitClick() {
    if (this.marks > 35) {
      this.isPassed = true;
      this.result = 'You are passed';
    } else {
      this.isPassed = false;
      this.result = 'You are failed';
    }
  }
}
