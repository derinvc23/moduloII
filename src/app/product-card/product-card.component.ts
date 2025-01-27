import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: { id: number; name: string; price: number; image: string } | undefined; 
  @Output() addToCartEvent = new EventEmitter<number>();
  
  // Función que emite un evento cuando el botón es clicado
  addToCart() {
    if (this.product) {
      this.addToCartEvent.emit(this.product.id);
    }
  }
}
