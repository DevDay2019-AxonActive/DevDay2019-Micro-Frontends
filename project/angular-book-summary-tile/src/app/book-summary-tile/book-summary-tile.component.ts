import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  EventEmitter,
  HostListener,
  ElementRef,
  OnChanges
} from '@angular/core';

@Component({
  selector: BookSummaryTileComponent.SELECTOR,
  templateUrl: './book-summary-tile.component.html',
  styleUrls: ['./book-summary-tile.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookSummaryTileComponent implements OnChanges {
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

  fullRatingStars: any[];
  emptyRatingStars: any[];

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.fullRatingStars = [].constructor(Math.floor(this.rating));
    this.emptyRatingStars = [].constructor(Math.floor(5 - this.rating));
  }

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
