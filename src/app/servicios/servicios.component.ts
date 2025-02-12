// Importación de módulos esenciales para el componente
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'; // Biblioteca para animaciones al hacer scroll (Animate On Scroll)

@Component({
  selector: 'app-servicios', // Selector que identifica al componente en el HTML
  templateUrl: './servicios.component.html', // Ruta del template HTML del componente
})
export class ServiciosComponent implements OnInit {
  // Inyección de dependencias:
  // - Router: Permite la navegación entre rutas de la aplicación.
  constructor(private router: Router) {}

  // Método del ciclo de vida ngOnInit que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Inicializar AOS para activar las animaciones al hacer scroll
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos
      once: true,    // Las animaciones se ejecutan solo una vez por elemento
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
  }

  // Método para navegar a la sección "Sobre Nosotros"
  irAboutUs() {
    // Utiliza el router para navegar a la ruta '/sobre-nosotros'
    this.router.navigate(['/sobre-nosotros']);
  }
}
