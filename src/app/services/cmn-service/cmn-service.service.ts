import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CmnServiceService {
  constructor() {}

  showError(msg: string) {
    console.error('Error :-', msg);
  }

  showLogs(msg: string) {
    console.log('MSG :- ', msg);
  }
}
