import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { CmnServiceService } from '../services/cmn-service/cmn-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router, private cmnService: CmnServiceService) {}

  onAboutUsClick() {
    this.router.navigate(['/about-us/123'], {
      queryParams: {
        name: 'Jainik Patel',
        age: 25,
      },
    });
  }

  onUpdate() {
    this.cmnService.points.next(10);
  }
}
