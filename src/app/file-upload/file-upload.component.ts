import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Input() showCamera = false;

  @Output() upload = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(files) {
    console.log('My files :- ', files);
    this.upload.emit(files.target.files);
  }

  onPhotoCameraClick() {
    console.log('camera open');
  }
}
