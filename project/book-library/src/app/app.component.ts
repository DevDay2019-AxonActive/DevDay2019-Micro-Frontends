import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Làm bạn với bầu trời';

  thumbnailUrl = 'https://salt.tikicdn.com/cache/w1200/ts/product/af/a1/4b/92477ec9b6688060b2b5d2022a60d3e6.jpg';

  summary = 'Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng';

  author = 'Nguyễn Nhật Ánh';

  commentNumber = 35;

  rating = 5;

  sourceName = 'Tiki';
}
