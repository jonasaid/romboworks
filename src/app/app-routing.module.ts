// Importación de módulos esenciales para la configuración de rutas en Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de los componentes que se utilizarán en las rutas de la aplicación.
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { Articulo1Component } from './inicio/articulo1/articulo1.component';
import { Articulo2Component } from './inicio/articulo2/articulo2.component';
import { Articulo3Component } from './inicio/articulo3/articulo3.component';

// Definición de las rutas de la aplicación.
// Cada objeto en el arreglo 'routes' define una ruta específica, 
// asociando una URL a un componente que se renderizará cuando se acceda a esa ruta.
const routes: Routes = [
  // Ruta raíz: redirige a 'inicio' cuando la URL está vacía.
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
  // Ruta para la página de inicio.
  { path: 'inicio', component: InicioComponent },
  
  // Ruta para la sección de servicios.
  { path: 'servicios', component: ServiciosComponent },
  
  // Ruta para la sección de contacto.
  { path: 'contacto', component: ContactoComponent },
  
  // Ruta para la sección de preguntas frecuentes (FAQs).
  { path: 'faqs', component: FaqsComponent },
  
  // Ruta para la sección "Sobre Nosotros".
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  
  // Rutas para artículos individuales.
  { path: 'articulo1', component: Articulo1Component },
  { path: 'articulo2', component: Articulo2Component },
  { path: 'articulo3', component: Articulo3Component },
  
  // Ruta comodín: redirige a 'inicio' para cualquier URL no definida.
  { path: '**', redirectTo: 'inicio' }
];

// Decorador NgModule que configura el módulo de enrutamiento de la aplicación.
@NgModule({
  // Se importa RouterModule con las rutas definidas mediante forRoot.
  imports: [RouterModule.forRoot(routes)],
  // Se exporta RouterModule para que las directivas y servicios de enrutamiento estén disponibles en toda la aplicación.
  exports: [RouterModule]
})
export class AppRoutingModule { }
