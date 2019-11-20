import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../models/book.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginIntegrationService {
  private readonly apiUrl = 'http://85.214.44.228:18080/user';

  constructor(private http$: HttpClient, private errorHandler: ErrorHandler) {}

  public login(username: string, password: string): Observable<User> {
    const url = this.apiUrl + '/login';
    const httpParams = new HttpParams().set('username', username).set('password', password);
    return this.http$.get<User>(url, { params: httpParams }).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }

  public registration(user: User): Observable<HttpResponse<string>> {
    const url = this.apiUrl + '/registration';
    return this.http$.post<HttpResponse<string>>(url, user).pipe(
      catchError(error => {
        this.errorHandler.handleError(error);
        return of(undefined);
      })
    );
  }
}
