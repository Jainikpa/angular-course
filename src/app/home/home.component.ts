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
  name = 'Jeet';
  constructor(private router: Router, private cmnService: CmnServiceService) {}

  onAboutUsClick() {
    this.router.navigate(['/about-us/123'], {
      queryParams: {
        name: 'Jainik Patel',
        age: 25,
      },
    });
  }

  onTemplate() {
    this.router.navigateByUrl('/template-driven');
  }

  Header() {}

  FileUpload() {}

  Directives() {}

  Child() {}

  ObservalbePromis() {}

  Pipes() {}

  Parent() {}

  onUpdate() {
    this.cmnService.points.next(10);
  }

  onLibraryClick() {
    this.router.navigateByUrl('library');
  }
}
