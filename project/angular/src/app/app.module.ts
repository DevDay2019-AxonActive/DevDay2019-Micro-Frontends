import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { BookSummaryTileComponent } from './book-summary-tile/book-summary-tile.component';

import 'bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BookSummaryTileComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  entryComponents: [BookSummaryTileComponent] // This we have to do for all dynamic components
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(BookSummaryTileComponent, { injector: this.injector });
    customElements.define(BookSummaryTileComponent.SELECTOR, element);
  }
}
