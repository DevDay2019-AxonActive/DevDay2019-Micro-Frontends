import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  search(keyword: string) {
    if (keyword.length == 0) {
      alert('Hãy nhập sách bạn muốn tìm!');
    } else {
      // TODO: Call API
      alert(keyword);
    }

    return false;
  }
}
