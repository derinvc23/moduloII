import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Catálogo de Productos</h2>
    <div class="product-list">
      <div *ngFor="let product of products" (click)="goToDetail(product.id)" class="product-card">
        <h3>{{ product.name }}</h3>
        <p>Precio: {{ product.price | currency }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
  ];

  constructor(private router: Router) {}

  goToDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}

