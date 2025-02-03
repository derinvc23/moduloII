import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  // Importa RouterModule
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/product.service'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule, ReactiveFormsModule, RouterOutlet],  // Incluye ReactiveFormsModule y RouterModule en imports
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

  filteredProducts = [...this.products]; 
  cartCount: number = 0;
  searchForm: FormGroup; 

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required] 
    });
  }

  ngOnInit() {
    this.updateCartCount();
  }

  onAddToCart(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      this.productService.addToCart(product);
      this.updateCartCount();
    }
  }

  updateCartCount() {
    this.cartCount = this.productService.getCartCount();
  }

  onRemoveFromCart(productId: number) {
    this.productService.removeFromCart(productId);
    this.updateCartCount();
  }

  onSearch() {
    console.log('Buscando:', this.searchForm.get('searchTerm')?.value); 
    const searchTerm = this.searchForm.get('searchTerm')?.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }

  onClearSearch() {
    this.searchForm.reset();
    this.filteredProducts = [...this.products];
  }
  

  get cart() {
    return this.productService.getCart();
  }
}
