import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart: { id: number; name: string; price: number; image: string }[] = [];

  constructor() { }

  // Agrega un producto al carrito
  addToCart(product: { id: number; name: string; price: number; image: string }) {
    this.cart.push(product);
  }

  // Obtén los productos en el carrito
  getCart() {
    return this.cart;
  }

  // Obtén la cantidad de productos en el carrito
  getCartCount() {
    return this.cart.length;
  }

  // Elimina un producto del carrito por su ID
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
  }
}
