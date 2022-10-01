import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  name = 'Angrio Technologies';
  private age = 18;

  constructor() {}

  ngOnInit(): void {}

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  printName() {
    console.log('Name :-', this.name);
  }

  printAge() {
    console.log('Age :-', this.age);
  }
}
