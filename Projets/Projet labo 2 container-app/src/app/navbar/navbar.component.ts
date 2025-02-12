import { Component } from '@angular/core';
import { AuthService } from '../aut.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  navigate(route: string) {
    if (!this.authService.getAuthStatus()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate([`/${route}`]);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
