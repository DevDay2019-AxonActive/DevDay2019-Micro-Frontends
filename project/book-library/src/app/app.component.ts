import { Component } from '@angular/core';
import { SearchService } from './services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: any[] = [];

  constructor(private searchService: SearchService) {}

  search(event: string) {
    /* test data. server is died
    let book1 = {"id":2,"name":"1Piano Lessons Can Be Murder (Goosebumps, No 13)","author":"R. L. Stine","serialNumber":"590494481","details":[{"id":1,"source":"AAHCM","description":null,"comments":[{"id":1,"bookDetail":null,"user":null,"content":"A little damage to the back cover, but otherwise great condition.","parent":null,"parentId":null}],"ratings":[{"id":2,"bookDetail":null,"user":{"id":1,"username":"simple","password":"8dbdda48fb8748d6746f1965824e966a","fullName":"Simple Writer","email":"simple@example.com","createAt":"2018-01-31T00:00:00.000+0000","comments":null,"devices":null,"ratings":null,"bookInWishList":null},"value":1}],"tags":[{"id":1,"name":"Children's Books"},{"id":2,"name":"Spine-Chilling Horror"},{"id":3,"name":"Genealogy"},{"id":4,"name":"Words, Language & Grammar"},{"id":5,"name":"Foreign Language Study & Reference"},{"id":6,"name":"Atlases & Maps"},{"id":7,"name":"Test Preparation"},{"id":8,"name":"Survival & Emergency Preparedness"},{"id":9,"name":"Careers"},{"id":10,"name":"Almanacs & Yearbooks"},{"id":11,"name":"Quotations"},{"id":12,"name":"Dictionaries & Thesauruses"},{"id":13,"name":"Writing, Research & Publishing Guides"},{"id":14,"name":"Catalogs & Directories"},{"id":15,"name":"Cartoons"},{"id":16,"name":"Jokes & Riddles"},{"id":17,"name":"Etiquette"},{"id":18,"name":"Encyclopedias & Subject Guides"},{"id":19,"name":"Science Fiction & Fantasy"},{"id":20,"name":"Humor"},{"id":21,"name":"Consumer Guides"},{"id":22,"name":"Reference"}],"coverUrl":"https://covers.openlibrary.org/b/id/6967248-L.jpg"}],"subscribers":null};
    let book2 = {"id":2,"name":"2Piano Lessons Can Be Murder (Goosebumps, No 13)","author":"R. L. Stine","serialNumber":"590494481","details":[{"id":1,"source":"dsdsds","description":null,"comments":[{"id":1,"bookDetail":null,"user":null,"content":"A little damage to the back cover, but otherwise great condition.","parent":null,"parentId":null}],"ratings":[{"id":2,"bookDetail":null,"user":{"id":1,"username":"simple","password":"8dbdda48fb8748d6746f1965824e966a","fullName":"Simple Writer","email":"simple@example.com","createAt":"2018-01-31T00:00:00.000+0000","comments":null,"devices":null,"ratings":null,"bookInWishList":null},"value":1}],"tags":[{"id":1,"name":"Children's Books"},{"id":2,"name":"Spine-Chilling Horror"},{"id":3,"name":"Genealogy"},{"id":4,"name":"Words, Language & Grammar"},{"id":5,"name":"Foreign Language Study & Reference"},{"id":6,"name":"Atlases & Maps"},{"id":7,"name":"Test Preparation"},{"id":8,"name":"Survival & Emergency Preparedness"},{"id":9,"name":"Careers"},{"id":10,"name":"Almanacs & Yearbooks"},{"id":11,"name":"Quotations"},{"id":12,"name":"Dictionaries & Thesauruses"},{"id":13,"name":"Writing, Research & Publishing Guides"},{"id":14,"name":"Catalogs & Directories"},{"id":15,"name":"Cartoons"},{"id":16,"name":"Jokes & Riddles"},{"id":17,"name":"Etiquette"},{"id":18,"name":"Encyclopedias & Subject Guides"},{"id":19,"name":"Science Fiction & Fantasy"},{"id":20,"name":"Humor"},{"id":21,"name":"Consumer Guides"},{"id":22,"name":"Reference"}],"coverUrl":"https://covers.openlibrary.org/b/id/6967248-L.jpg"}],"subscribers":null};
    this.books.push(book1);
    this.books.push(book2);
    */
    this.searchService.search(event).subscribe((res: any[]) => {
      this.books = res;
    });
  }
}
