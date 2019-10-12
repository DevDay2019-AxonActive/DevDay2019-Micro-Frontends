import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { BookSummaryTileComponent } from './book-summary-tile/book-summary-tile.component';

@NgModule({
  declarations: [BookSummaryTileComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [BookSummaryTileComponent] // This we have to do for all dynamic components
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(BookSummaryTileComponent, { injector });
    customElements.define(BookSummaryTileComponent.SELECTOR, el);
  }

  ngDoBootstap() {}
}
