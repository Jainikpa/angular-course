import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild('child') childObj: ChildComponent;

  constructor() {}

  ngOnInit(): void {}

  onSetAndPrintClick() {
    this.childObj.setName = 'Jainik Patel';
    this.childObj.printName();
  }

  onFileUpload(files) {
    console.log('files in parent :-', files);
  }
}
