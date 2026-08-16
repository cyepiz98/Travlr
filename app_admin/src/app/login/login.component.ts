import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (data: any) => {
          this.authService.saveToken(data.token);
          this.router.navigate(['/']);
        },
        error: () => {
          this.error = 'Invalid login';
        }
      });
  }
}
