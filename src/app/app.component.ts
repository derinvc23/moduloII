import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/product.service'; // Importa el servicio

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diplomado Univalle';
  products = [
    { id: 1, name: 'Producto 1', price: 100, image: 'https://www.fairplay.com.bo/puma-zap-softride-premier-376186-09/phttps://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/t/e/televisor_skyworth_75_qled_google_tv_-75sue9500.png' },
    { id: 2, name: 'Producto 2', price: 200, image: 'https://www.tresreyes.com.mx/products/tenis-casual-blanco-joven-court-02170' },
    { id: 3, name: 'Producto 3', price: 300, image: 'https://www.tresreyes.com.mx/products/tenis-casual-blanco-joven-court-02170' }
  ];

  cartCount: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.updateCartCount();
  }

  // Agrega producto al carrito usando el servicio
  onAddToCart(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      this.productService.addToCart(product);
      this.updateCartCount();
      console.log('Producto agregado al carrito:', product);
    }
  }

  // Actualiza la cantidad de productos en el carrito
  updateCartCount() {
    this.cartCount = this.productService.getCartCount();
  }

  // Elimina producto del carrito usando el servicio
  onRemoveFromCart(productId: number) {
    this.productService.removeFromCart(productId);
    this.updateCartCount();
  }

  // Obtiene los productos en el carrito
  get cart() {
    return this.productService.getCart();
  }
}

