import { Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: MiComponenteComponent },  
  { path: '', component: ProductListComponent },  // Página principal muestra la lista de productos
  { path: 'product/:id', component: ProductDetailComponent }  // Vista de detalles de producto
];
