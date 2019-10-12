import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html'
})
export class GreetComponent implements OnInit {
  @Input()
  name: string;

  constructor() {}

  ngOnInit(): void {}
}
