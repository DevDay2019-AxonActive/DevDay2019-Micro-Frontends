import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: BookSummaryTileComponent.SELECTOR,
  templateUrl: './book-summary-tile.component.html',
  styleUrls: ['./book-summary-tile.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookSummaryTileComponent implements OnInit {
  static SELECTOR = 'book-summary-tile';

  @Input()
  title: string;

  math = Math;

  thumbnailUrl: string;

  @Input()
  summary: string;

  @Input()
  author: string;

  @Input()
  commentNumber: number;

  @Input()
  rating: number;

  @Input()
  sourceName: string;

  constructor() {}

  ngOnInit(): void {}
}
