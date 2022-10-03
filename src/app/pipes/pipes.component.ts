import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CmnServiceService } from '../services/cmn-service/cmn-service.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  name = 'jainik';
  name1 = 'CAPITAL LETTERS';
  myDate = new Date();
  money = 12000;
  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private cmnService: CmnServiceService
  ) {}

  ngOnInit(): void {
    console.log('MyDate :- ', this.myDate);

    this.cmnService.showError('Print this error ');
    this.cmnService.showLogs('Print this log');

    this.cmnService.showError(
      'Print this error asdfasdfadsfasdfsdafasdf asdfsdfds'
    );

    let date = this.datePipe.transform(this.myDate, 'dd/MMM/YYYY');
    console.log('Formatted Date :- ', date);

    let currency = this.currencyPipe.transform(
      this.money,
      'INR',
      'symbol',
      '0.2-5'
    );
    console.log('Formatted currency :- ', currency);
  }
}
