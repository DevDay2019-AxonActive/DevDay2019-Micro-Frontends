import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: BookSummaryTileComponent.SELECTOR,
  templateUrl: './book-summary-tile.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookSummaryTileComponent implements OnInit {
  static SELECTOR = 'book-summary-tile';

  @Input()
  name: string;

  constructor() {}

  ngOnInit(): void {}
}
