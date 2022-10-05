import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Student {
  name: string;
  age: number;
}

@Component({
  selector: 'app-observalbe-promis',
  templateUrl: './observalbe-promis.component.html',
  styleUrls: ['./observalbe-promis.component.scss'],
})
export class ObservalbePromisComponent implements OnInit {
  name: Observable<Student> = new Observable<{ name: 'asdffds'; age: 225 }>();

  points: BehaviorSubject<any>;

  name1: Promise<any>;

  constructor() {}

  ngOnInit(): void {
    this.getStudent(false)
      .then((res: any) => {
        console.log('Promise Response', res);
      })
      .catch((err: any) => {
        console.log('Promise error', err);
      });
  }

  getStudent(isSuccess): Promise<Student> {
    return new Promise((resolve, reject) => {
      if (isSuccess) {
        resolve({ name: 'Jainik ', age: 25 });
      } else {
        reject('Some error');
      }
    });
  }
}
