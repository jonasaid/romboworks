import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Inicializar AOS
            AOS.init({
              duration: 800, // Duración de las animaciones (en ms)
              once: true,    // Ejecutar las animaciones solo una vez
              offset: 100,   // Distancia desde el viewport para activar las animaciones
            });
  }

}
