import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library/book-library.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  bookDetail: Book;
  fullRatingStars: any[];
  emptyRatingStars: any[];

  constructor(private route: ActivatedRoute, private bookLibraryService: BookLibraryService) {}

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const bookId: string = this.route.snapshot.paramMap.get('bookId');

    this.bookLibraryService.getBook(bookId).subscribe((res: Book) => {
      this.bookDetail = res;

      // TODO: rating from bookDetail
      const rating: number = 5;
      this.fullRatingStars = [].constructor(Math.floor(rating));
      this.emptyRatingStars = [].constructor(Math.floor(5 - rating));
    });
  }
}
