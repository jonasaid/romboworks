import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importación añadida
import { MatListModule } from '@angular/material/list'; // Importación añadida

import { Articulo1Component } from './inicio/articulo1/articulo1.component';
import { Articulo2Component } from './inicio/articulo2/articulo2.component';
import { Articulo3Component } from './inicio/articulo3/articulo3.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule, // Añadido para usar MatSidenav
    MatListModule,    // Añadido para usar MatNavList
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

