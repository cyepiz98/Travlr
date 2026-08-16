import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  userName = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    const user = this.authService.getUser();
    this.userName = user ? user.name : '';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
