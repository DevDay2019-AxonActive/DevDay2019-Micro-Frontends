import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchAction: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  search(keyword: string) {
    if (keyword.length == 0) {
      alert('Hãy nhập sách bạn muốn tìm!');
    } else {
      this.searchAction.emit(keyword);
    }
    return false;
  }
}
