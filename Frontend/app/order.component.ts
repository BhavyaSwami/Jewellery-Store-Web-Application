import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  template: `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <h2 class="mb-4">Order Jewellery</h2>
          <div *ngIf="!isLoggedIn">
            <div class="alert alert-warning text-center">
              You must <a routerLink="/login">login</a> or <a routerLink="/register">register</a> to place an order.
            </div>
          </div>
          <form *ngIf="isLoggedIn" (ngSubmit)="submitOrder()">
            <div class="form-group mb-3">
              <label>Name</label>
              <input [(ngModel)]="name" name="name" class="form-control" placeholder="Your Name" required />
            </div>
            <div class="form-group mb-3">
              <label>Address</label>
              <input [(ngModel)]="address" name="address" class="form-control" placeholder="Delivery Address" required />
            </div>
            <div class="form-group mb-3">
              <label>Contact Number</label>
              <input [(ngModel)]="contact" name="contact" class="form-control" placeholder="Contact Number" required />
            </div>
            <button type="submit" class="btn btn-success w-100">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class OrderComponent {
  name = '';
  address = '';
  contact = '';
  isLoggedIn = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    // Simple check for login (replace with real auth logic)
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
  }
  submitOrder() {
    alert('Order placed successfully!\nName: ' + this.name + '\nAddress: ' + this.address + '\nContact: ' + this.contact);
  }
}
