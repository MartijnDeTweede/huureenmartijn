import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.css']
})
export class HeaderLinkComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
