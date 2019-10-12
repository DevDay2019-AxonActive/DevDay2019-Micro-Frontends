import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: BookSummaryTileComponent.SELECTOR,
  templateUrl: './book-summary-tile.component.html'
})
export class BookSummaryTileComponent implements OnInit {
  static SELECTOR = 'book-summary-tile';

  @Input()
  name: string;

  constructor() {}

  ngOnInit(): void {}
}
