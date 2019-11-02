import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: BookSummaryTileComponent.SELECTOR,
  templateUrl: './book-summary-tile.component.html',
  styleUrls: ['./book-summary-tile.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookSummaryTileComponent implements OnInit {
  static SELECTOR = 'angular-book-summary-tile';

  @Input()
  id: number;

  @Input()
  title: string;

  math = Math;

  @Input()
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

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick() {
    const event = new CustomEvent('clicked', {
      detail: {
        bookId: this.id
      }
    });
    this.el.nativeElement.dispatchEvent(event);
  }
}
