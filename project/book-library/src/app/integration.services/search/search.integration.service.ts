import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiList } from 'src/app/constants/api-list';

@Injectable({
  providedIn: 'root'
})
export class SearchIntegrationService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  search(keywork: string): Observable<any[]> {
    let url = apiList.BASE_URL + apiList.LIBRARY_CORE.BOOK_SEARCH;

    return this.http.post<any[]>(url, JSON.stringify({ keyword: keywork }), { headers: this.headers }).pipe();
  }
}
