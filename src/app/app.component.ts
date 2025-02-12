// Importa el decorador Component para definir un componente Angular
import { Component } from '@angular/core';
// Importa el servicio Router para permitir la navegación entre rutas
import { Router } from '@angular/router';

@Component({
  // Selector que se utiliza para insertar este componente en la plantilla HTML (por ejemplo, <app-root></app-root>)
  selector: 'app-root',
  // Ruta al archivo HTML que contiene la estructura del componente
  templateUrl: './app.component.html',
  // Ruta al archivo CSS que contiene los estilos del componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variable que determina si se muestra la barra de herramientas en la interfaz
  showToolbar = true;

  // Variable que controla el estado del menú desplegable en dispositivos móviles (true = abierto, false = cerrado)
  isMenuOpen = false;

  // Constructor con inyección del servicio Router para habilitar la navegación programática
  constructor(private router: Router) {}

  /**
   * Método que alterna el estado del menú móvil.
   * Cuando se invoca, cambia el valor de isMenuOpen de true a false o viceversa.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
