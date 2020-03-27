import { Component, OnInit, Input } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-personal-info-cube',
  templateUrl: './personal-info-cube.component.html',
  styleUrls: ['./personal-info-cube.component.css']
})
export class PersonalInfoCubeComponent implements OnInit {
  @Input() title: string;
  public skills = data.skills;
  public personalia = data.personalia;
  public interests = data.interests;
  public facts = data.facts;
  public educations = data.educations;
  public trainings = data.trainings;
  
  constructor() { }

  ngOnInit(): void {
  }
}
