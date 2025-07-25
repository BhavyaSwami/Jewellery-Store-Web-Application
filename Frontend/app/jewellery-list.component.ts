import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewellery-list',
  template: `
    <h2 class="mb-4">Browse Jewellery</h2>
    <div class="row">
      <div class="col-md-4" *ngFor="let item of jewellery">
        <div class="card">
          <a [routerLink]="['/order', item.id]">
            <img [src]="item.imageUrl" class="card-img-top jewellery-img" alt="Jewellery">
          </a>
          <div class="card-body">
            <div class="box-links p-3 mb-2" style="background:#f5e6e0; border-radius:8px; text-align:center;">
              <h5 class="card-title mb-2">
                <a [routerLink]="['/order', item.id]" class="fw-bold text-decoration-none" style="color:#b97a56; font-size:1.2rem;">{{item.name}}</a>
              </h5>
              <a class="btn btn-primary" [routerLink]="['/order', item.id]" style="margin-top:8px;">Order</a>
            </div>
            <p class="card-text mt-3">{{item.description}}</p>
            <p class="card-text"><strong>{{item.price | currency}}</strong></p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class JewelleryListComponent implements OnInit {
  jewellery: any[] = [
    {
      id: 1,
      name: 'Rose Gold Pendant',
      description: 'Elegant rose gold pendant with diamond accent.',
      price: 2999,
      imageUrl: 'assets/pendant.webp'
    },
    {
      id: 2,
      name: 'Silver Bracelet',
      description: 'Classic silver bracelet for all occasions.',
      price: 1499,
      imageUrl: 'assets/bracelet.webp'
    },
    {
      id: 3,
      name: 'Pearl Earrings',
      description: 'Timeless pearl earrings with gold setting.',
      price: 1999,
      imageUrl: 'assets/pearl.jpg'
    }
  ];
  constructor(private router: Router) {}
  ngOnInit() {}
  order(id: number) {
    this.router.navigate(['/order', id]);
  }
}
