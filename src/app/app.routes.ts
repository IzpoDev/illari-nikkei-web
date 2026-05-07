import { Routes } from '@angular/router';
import { LandingPage } from './modules/landing-page/landing-page';
import { Menu } from './modules/menu/menu';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'menu', component: Menu },
  { path: '**', redirectTo: '' }
];
