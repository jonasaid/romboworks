import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 800, // Duración de las animaciones (en ms)
      once: true,    // Ejecutar las animaciones solo una vez
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
  }

  irAboutUs() {
    this.router.navigate(['/sobre-nosotros']);
  }
}

