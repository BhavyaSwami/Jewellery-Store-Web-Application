import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <h2 class="mb-4">Login</h2>
          <form (ngSubmit)="login()">
            <div class="form-group mb-3">
              <label>Username</label>
              <input [(ngModel)]="username" name="username" class="form-control" placeholder="Username" required />
            </div>
            <div class="form-group mb-3">
              <label>Password</label>
              <input [(ngModel)]="password" name="password" type="password" class="form-control" placeholder="Password" required />
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
          <div class="mt-3 text-center">
            <a routerLink="/register">Don't have an account? Register</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private userService: UserService, private router: Router) {}
  login() {
    this.userService.login(this.username, this.password).subscribe(resp => {
      alert(resp);
      if (resp === 'Login successful') {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/browse']);
      }
    });
  }
}
