import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiList } from 'src/app/constants/api-list';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookLibraryV2IntegrationService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getBooks(keywork: string): Observable<Book[]> {
    let url = apiList.BASE_URL + apiList.LIBRARY_CORE.BOOK_SEARCH;

    return this.http.post<Book[]>(url, JSON.stringify({ keyword: keywork }), { headers: this.headers }).pipe();
  }

  getBook(bookId: string): Observable<Book> {
    let url = apiList.BASE_URL + apiList.LIBRARY_CORE.BOOK_DETAIL.replace(':bookId', bookId);

    return this.http.get<Book>(url, { headers: this.headers }).pipe();
  }
}
