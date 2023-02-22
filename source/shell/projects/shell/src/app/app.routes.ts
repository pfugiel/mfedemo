import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // {
  //   path: 'flights',
  //   loadChildren: () => import('mfe1/Module').then((m) => m.FlightsModule)
  // },

  {
    matcher: startsWith('flights'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './web-components',
      elementName: 'mfe1-element'
    } as WebComponentWrapperOptions
  },


  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
