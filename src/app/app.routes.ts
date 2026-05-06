import { Routes } from '@angular/router';
import { LandingPage } from './modules/landing-page/landing-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: '**', redirectTo: '' }
];
