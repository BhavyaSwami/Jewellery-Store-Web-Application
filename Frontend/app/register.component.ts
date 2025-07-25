import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <h2 class="mb-4">Register</h2>
          <form (ngSubmit)="register()">
            <div class="form-group mb-3">
              <label>Username</label>
              <input [(ngModel)]="username" name="username" class="form-control" placeholder="Username" required />
            </div>
            <div class="form-group mb-3">
              <label>Password</label>
              <input [(ngModel)]="password" name="password" type="password" class="form-control" placeholder="Password" required />
            </div>
            <button type="submit" class="btn btn-success w-100">Register</button>
          </form>
          <div class="mt-3 text-center">
            <a routerLink="/login">Already have an account? Login</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RegisterComponent {
  username = '';
  password = '';
  constructor(private userService: UserService, private router: Router) {}
  register() {
    this.userService.register(this.username, this.password).subscribe(resp => {
      alert(resp);
      if (resp === 'User registered successfully') {
        this.router.navigate(['/login']);
      }
    });
  }
}
