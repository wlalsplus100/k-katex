import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainComponent },
];