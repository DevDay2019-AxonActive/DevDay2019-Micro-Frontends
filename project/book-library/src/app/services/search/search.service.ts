import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchIntegrationService } from 'src/app/integration.services/search/search.integration.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private searchIntegrationService: SearchIntegrationService) {}

  search(keywork: string): Observable<any[]> {
    return this.searchIntegrationService.search(keywork);
  }
}
