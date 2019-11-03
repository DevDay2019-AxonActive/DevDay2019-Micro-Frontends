import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../../models/book.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookLibraryIntegrationService {
  private readonly apiUrl = 'http://85.214.44.228:8082/library-core/api';

  constructor(private http$: HttpClient, private errorHandler: ErrorHandler) {}

  public getBooks(): Observable<Book[]> {
    const url = this.apiUrl + '/books';
    return this.http$.get<Book[]>(url).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }

  public getBookById(bookId: number): Observable<Book> {
    const url = this.apiUrl + '/books/' + bookId;
    return this.http$.get<Book>(url).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }

  public getCommentByBookId(bookId: number): Observable<Comment[]> {
    const url = this.apiUrl + `/books/${bookId}/comments`;
    return this.http$.get<Comment>(url).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }

  public searchBook(keyword: string): Observable<Book[]> {
    const url = this.apiUrl + '/books/search';
    const criteria = { keyword };
    return this.http$.post<Book[]>(url, criteria).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }

  public rate(userId: number, bookDetailId: number, point: number): Observable<boolean> {
    const url = this.apiUrl + `/book-details/${bookDetailId}/ratings`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: userId + ''
      })
    };
    return this.http$.post<boolean>(url, point, httpOptions).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }

  public unrate(userId: number, bookDetailId: number): Observable<boolean> {
    const url = this.apiUrl + `/book-details/${bookDetailId}/ratings`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: userId + ''
      })
    };
    return this.http$.delete<boolean>(url, httpOptions).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }
}
