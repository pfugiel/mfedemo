import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FlightsModule} from './flights/flights.module';
import {APP_ROUTES} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    // AppComponent
  ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular1-element', customElement);
  }

}
