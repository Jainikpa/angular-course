import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective implements OnInit {
  @Input() name = '';

  constructor() {
    console.log('Directive called');
  }
  ngOnInit(): void {
    console.log('Name :- ', this.name);
  }
}
