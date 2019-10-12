import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { createCustomElement } from "@angular/elements";

import { GreetComponent } from "./greet/greet.component";

@NgModule({
  declarations: [GreetComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [GreetComponent] // This we have to do for all dynamic components
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(GreetComponent, { injector });
    customElements.define("app-greet", el);
  }

  ngDoBootstap() {}
}
