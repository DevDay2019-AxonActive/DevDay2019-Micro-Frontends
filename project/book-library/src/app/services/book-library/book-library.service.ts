import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookLibraryV2IntegrationService } from 'src/app/integration-services/book-library-v2/book-library-v2.integration.service';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookLibraryService {
  constructor(private bookLibraryV2IntegrationService: BookLibraryV2IntegrationService) {}

  getBooks(keywork: string): Observable<Book[]> {
    return this.bookLibraryV2IntegrationService.getBooks(keywork);
  }

  getBook(bookId: string): Observable<Book> {
    return this.bookLibraryV2IntegrationService.getBook(bookId);
  }
}
