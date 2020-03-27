import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info-cube',
  templateUrl: './personal-info-cube.component.html',
  styleUrls: ['./personal-info-cube.component.css']
})
export class PersonalInfoCubeComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }
}
