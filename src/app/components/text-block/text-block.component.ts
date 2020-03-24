import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() link: string;
  @Input() mainCtaText: string;
  @Input() secondCtaText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
