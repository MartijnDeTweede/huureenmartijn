import { Component, OnInit, Input } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-projects-info-cube',
  templateUrl: './projects-info-cube.component.html',
  styleUrls: ['./projects-info-cube.component.css']
})
export class ProjectsInfoCubeComponent implements OnInit {
  @Input() title: string;
  public brightCubes = data.brightCubes;
  public enecoOnlineSales = data.enecoOnlineSales;
  public enecoCOM = data.enecoCOM;
  public rateMyHouse = data.rateMyHouse;
  public joeguitar = data.joeGuitar;
  public huurMartijn = data.huurMartijn;
  
  constructor() { }

  ngOnInit(): void {
  }

}
