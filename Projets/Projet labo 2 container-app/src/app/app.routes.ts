import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Page principale
  { path: 'login', component: LoginComponent }, // Page de connexion
  // Tu peux ajouter d'autres routes ici si besoin, comme Home, Settings, etc.
];
