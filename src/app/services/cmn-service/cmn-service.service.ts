import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CmnServiceService {
  points: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  showError(msg: string) {
    console.error('Error :-', msg);
  }

  showLogs(msg: string) {
    console.log('MSG :- ', msg);
  }
}
