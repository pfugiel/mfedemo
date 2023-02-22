import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FlightsModule} from './flights/flights.module';
import {HttpClientModule} from '@angular/common/http';
import {createCustomElement} from '@angular/elements';
import {FlightsSearchComponent} from './flights/flights-search/flights-search.component';

export const APP_ROUTES: Routes = [
  {path: 'flights/flights-search', component: FlightsSearchComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'}
];

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
export class AppModule implements DoBootstrap  {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mfe1-element', customElement);
  }

}
