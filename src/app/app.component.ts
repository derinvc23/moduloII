import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Diplomado Univalle';
  products = [
    { id: 1, name: 'Producto 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: 200, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: 300, image: 'https://via.placeholder.com/150' }
  ];

  cart: { id: number; name: string; price: number; image: string }[] = [];

  // Función que maneja el evento de agregar al carrito
  onAddToCart(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      this.cart.push(product);  // Agregar producto al carrito
      console.log('Producto agregado al carrito:', product);
    }
  }

  // Función para eliminar producto del carrito
  onRemoveFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
    console.log('Producto eliminado del carrito:', productId);
  }
}
