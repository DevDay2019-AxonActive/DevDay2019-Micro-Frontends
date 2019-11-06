import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AngularComponentNameComponent } from './angular-component-name/angular-component-name.component';

import 'bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularComponentNameComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  entryComponents: [AngularComponentNameComponent] // This we have to do for all dynamic components
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AngularComponentNameComponent, { injector: this.injector });
    customElements.define(AngularComponentNameComponent.SELECTOR, element);
  }
}
