// Importa los módulos necesarios de Angular y la librería AOS para animaciones al hacer scroll.
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  // Selector que permite usar este componente en las plantillas HTML.
  selector: 'app-sobre-nosotros',
  // Ruta del archivo HTML que define la estructura del componente.
  templateUrl: './sobre-nosotros.component.html',
  // Ruta del archivo CSS que contiene los estilos del componente.
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  // El constructor se utiliza para la inyección de dependencias si fuera necesario.
  constructor() { }

  // Método del ciclo de vida OnInit que se ejecuta después de que el componente se haya inicializado.
  ngOnInit(): void {
    // Inicializa la librería AOS (Animate On Scroll) para activar animaciones al hacer scroll.
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos.
      once: true,    // Las animaciones se ejecutan solo una vez por elemento.
      offset: 100,   // Distancia desde el viewport para activar las animaciones.
    });
  }

}
