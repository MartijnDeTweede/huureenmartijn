import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-cube',
  templateUrl: './base-cube.component.html',
  styleUrls: ['./base-cube.component.css']
})
export class BaseCubeComponent implements OnInit {
  @Input() templateFront: TemplateRef<any>;
  @Input() templateTop: TemplateRef<any>;
  @Input() templateBottom: TemplateRef<any>;
  @Input() templateLeft: TemplateRef<any>;
  @Input() templateRight: TemplateRef<any>;
  @Input() templateBack: TemplateRef<any>;

  @Input() buttonTextFront: string;
  @Input() buttonTextTop: string;
  @Input() buttonTextBottom: string;
  @Input() buttonTextLeft: string;
  @Input() buttonTextRight: string;
  @Input() buttonTextBack: string;

  selectedFace: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedFace = "selected--front"
  }
  
  changeFace = (face: string) => {
    this.selectedFace= `selected--${face}`;
    console.log("this.selectedFace", this.selectedFace);
  }
}
