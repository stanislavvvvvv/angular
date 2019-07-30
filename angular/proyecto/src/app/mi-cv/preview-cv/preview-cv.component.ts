import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.css']
})
export class PreviewCvComponent implements OnInit {
  @Input() nombre = '';
  @Input() apellido = '';
  @Input() email = '';
  @Input() skills: Array<string> = [];
  @Input() foto = '';
  constructor() { }

  ngOnInit() {
  }

}
