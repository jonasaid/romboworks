import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.initBackgroundCarousel();
  }

  irAboutUs() {
    this.router.navigate(['/sobre-nosotros']);
  }

  irServices() {
    this.router.navigate(['/servicios']);
  }

  private initBackgroundCarousel() {
    const images = [
      './assets/Fondo4.webp',
      './assets/Fondo3.webp',
      './assets/Fondo1.webp',
      './assets/Fondo2.webp'
    ];
    let currentImageIndex = 0;

    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    if (heroSection) {
      // Set the initial background image
      this.renderer.setStyle(
        heroSection,
        'backgroundImage',
        `url(${images[currentImageIndex]})`
      );

      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Add transition class for smooth effect
        this.renderer.setStyle(
          heroSection,
          'backgroundImage',
          `url(${images[currentImageIndex]})`
        );
      }, 5000); // Cambia cada 4 segundos
    }
  }
}
