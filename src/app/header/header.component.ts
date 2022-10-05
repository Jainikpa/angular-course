import { Component, OnInit } from '@angular/core';
import { CmnServiceService } from '../services/cmn-service/cmn-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  point: number = 0;
  constructor(private cmnService: CmnServiceService) {}

  ngOnInit(): void {
    this.cmnService.points.subscribe((res: number) => {
      console.log('In Header Points subscribe called');
      this.point = res;
    });
  }
}
