import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="gemzi-title">Gemzi Jewellery Center</div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link nav-link-underline" routerLink="/browse">Browse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-underline" routerLink="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-underline" routerLink="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
