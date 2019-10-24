import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchIntegrationService {
  constructor() {}

  search(keywork: string): Observable<any[]> {
    // TODO: call search API with keywork

    return of([]);
  }
}
