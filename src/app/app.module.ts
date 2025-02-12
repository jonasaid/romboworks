// Importación del decorador NgModule para definir un módulo Angular
import { NgModule } from '@angular/core';
// BrowserModule es necesario para que la aplicación se ejecute en el navegador
import { BrowserModule } from '@angular/platform-browser';
// HttpClientModule permite realizar peticiones HTTP a APIs
import { HttpClientModule } from '@angular/common/http';
// FormsModule facilita el manejo de formularios en Angular
import { FormsModule } from '@angular/forms'; 
// BrowserAnimationsModule habilita las animaciones en Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MatSnackBarModule proporciona componentes de notificación tipo "snackbar" de Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Importación del módulo de enrutamiento de la aplicación
import { AppRoutingModule } from './app-routing.module';
// Importación del componente raíz de la aplicación
import { AppComponent } from './app.component';
// Importación de otros componentes utilizados en la aplicación
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

// Importación de módulos de Angular Material para la interfaz de usuario
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// MatSidenavModule se añade para implementar una barra lateral (sidenav)
import { MatSidenavModule } from '@angular/material/sidenav'; // Importación añadida
// MatListModule se añade para usar listas de navegación (MatNavList)
import { MatListModule } from '@angular/material/list'; // Importación añadida

// Importación de componentes para los artículos (secciones dentro de Inicio)
import { Articulo1Component } from './inicio/articulo1/articulo1.component';
import { Articulo2Component } from './inicio/articulo2/articulo2.component';
import { Articulo3Component } from './inicio/articulo3/articulo3.component';
// Importación del componente de Contacto
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  // Declaraciones: se registran todos los componentes, directivas y pipes que pertenecen a este módulo.
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    FaqsComponent,
    SobreNosotrosComponent,
    Articulo1Component,
    Articulo2Component,
    Articulo3Component,
    ContactoComponent
  ],
  // Imports: se importan otros módulos necesarios para el funcionamiento de este módulo.
  imports: [
    BrowserModule,            // Necesario para aplicaciones que se ejecutan en el navegador.
    AppRoutingModule,         // Configuración de rutas de la aplicación.
    BrowserAnimationsModule,  // Habilita las animaciones.
    MatToolbarModule,         // Módulo para usar barras de herramientas de Angular Material.
    MatButtonModule,          // Módulo para usar botones de Angular Material.
    HttpClientModule,         // Permite hacer peticiones HTTP.
    MatIconModule,            // Permite usar iconos de Angular Material.
    MatSnackBarModule,        // Permite mostrar notificaciones tipo snackbar.
    MatSidenavModule,         // Módulo para implementar una barra lateral (sidenav).
    MatListModule,            // Módulo para usar listas de navegación.
    FormsModule               // Facilita el uso de formularios.
  ],
  // Providers: se listan servicios que pueden ser inyectados en cualquier parte de la aplicación (en este caso, no se registra ninguno).
  providers: [],
  // Bootstrap: se define el componente raíz que se debe cargar al iniciar la aplicación.
  bootstrap: [AppComponent]
})
export class AppModule { }
