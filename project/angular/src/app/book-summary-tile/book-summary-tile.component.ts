import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: BookSummaryTileComponent.SELECTOR,
  templateUrl: './book-summary-tile.component.html',
  styleUrls: ['./book-summary-tile.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookSummaryTileComponent implements OnInit {
  static SELECTOR = 'book-summary-tile';

  @Input()
  title = 'Làm bạn với bầu trời';

  @Input()
  rating = 5;

  constructor() {}

  ngOnInit(): void {}
}
