import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() degree: string;
  @Input() educator: string;
  @Input() startDate: string;
  @Input() endDate: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
