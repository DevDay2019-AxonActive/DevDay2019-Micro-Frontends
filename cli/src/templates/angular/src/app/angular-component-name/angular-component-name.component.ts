import { Component, ElementRef, HostListener, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: AngularComponentNameComponent.SELECTOR,
  templateUrl: './angular-component-name.component.html',
  styleUrls: ['./angular-component-name.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngularComponentNameComponent {
  static SELECTOR = 'angular-component-name';

  @Input()
  teamName: string;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const event = new CustomEvent('clicked', {
      detail: {
        message: this.teamName
      }
    });
    this.el.nativeElement.dispatchEvent(event);
  }
}
