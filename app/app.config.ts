import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';  // Importa RouterModule
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  

import { MiComponenteComponent } from './mi-componente/mi-componente.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  // Esto ya está bien
    provideClientHydration(withEventReplay()),
    ReactiveFormsModule,
    RouterModule 
  ]
};
