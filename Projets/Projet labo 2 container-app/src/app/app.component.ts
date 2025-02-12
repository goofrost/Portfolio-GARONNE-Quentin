import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import nécessaire pour ngIf
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true, // Déclare que le composant est autonome
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, NavbarComponent], // Ajoute CommonModule pour *ngIf
})
export class AppComponent {
[x: string]: any;
  isLoggedIn = false; // Gère l'état de connexion
}
