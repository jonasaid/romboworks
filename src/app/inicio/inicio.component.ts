import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private texts: string[] = [
    'Impulsa tu crecimiento con soluciones digitales de vanguardia',
    'Plataformas de banca digital que conectan con el futuro',
    'Automatiza procesos con inteligencia artificial y machine learning',
    'Cumple con las normativas con nuestras soluciones RegTech',
    'Optimiza decisiones con análisis de datos y big data',
    'Impulsa tu crecimiento con RomboWorks',
    'Seguridad y accesibilidad en banca móvil y en línea',
    'Transforma tu empresa con herramientas de inteligencia artificial',
    'Cumple con regulaciones y normativas con tecnología RegTech',
    'Descubre el poder de la visualización interactiva con big data'
  ];

  private images: string[] = [
    './assets/Fondo4.webp',
    './assets/digibank.webp',
    './assets/iaimage.webp',
    './assets/regtechb.webp',
    './assets/bigdatab.webp',
    './assets/Fondo2.webp',
    './assets/digibankb.webp',
    './assets/iab.webp',
    './assets/regtecha.webp',
    './assets/bigdataa.webp'
  ];

  private currentTextIndex: number = 0;
  private currentImageIndex: number = 0;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.initBackgroundCarousel();
    this.initTextCarousel();

    // Inicializar AOS para animaciones
    AOS.init({
      duration: 800, // Duración de las animaciones (en ms)
      once: true,    // Ejecutar las animaciones solo una vez
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
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
      './assets/digibank.webp',
      './assets/iaimage.webp',
      './assets/regtechb.webp',
      './assets/bigdatab.webp',
      './assets/Fondo2.webp',
      './assets/digibankb.webp',
      './assets/iab.webp',
      './assets/regtecha.webp',
      './assets/bigdataa.webp'
    ];
    let currentImageIndex = 0;

    const heroSection = document.querySelector('.hero-section') as HTMLElement;

    if (heroSection) {
      // Precargar imágenes
      const preloadImage = (url: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
        });
      };

      const changeBackgroundImage = async () => {
        // Aplica la clase para desvanecer
        this.renderer.addClass(heroSection, 'fade-out');

        // Espera la precarga de la próxima imagen
        await preloadImage(images[currentImageIndex]);

        // Cambia la imagen de fondo
        this.renderer.setStyle(
          heroSection,
          'backgroundImage',
          `url(${images[currentImageIndex]})`
        );

        // Muestra la imagen con un desvanecimiento suave
        setTimeout(() => {
          this.renderer.removeClass(heroSection, 'fade-out');
          this.renderer.addClass(heroSection, 'fade-in');

          // Remover la clase fade-in después de la transición para reutilizarla
          setTimeout(() => {
            this.renderer.removeClass(heroSection, 'fade-in');
          }, 1000); // Duración de la transición en CSS
        }, 100);
      };

      // Configuración inicial
      this.renderer.setStyle(
        heroSection,
        'backgroundImage',
        `url(${images[currentImageIndex]})`
      );

      setInterval(async () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        await changeBackgroundImage();
      }, 4000); // Cambia cada 5 segundos
    }
  }

  private initTextCarousel() {
    const dynamicTextElement = document.getElementById('dynamic-text');

    if (dynamicTextElement) {
      setInterval(() => {
        // Reducir opacidad para el efecto de desvanecimiento
        this.renderer.setStyle(dynamicTextElement, 'opacity', '0');

        setTimeout(() => {
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;

          // Cambiar el texto después de reducir la opacidad
          this.renderer.setProperty(dynamicTextElement, 'textContent', this.texts[this.currentTextIndex]);

          // Volver a mostrar el texto con opacidad 1
          this.renderer.setStyle(dynamicTextElement, 'opacity', '1');
        }, 500); // Espera el tiempo de la transición (0.5s)
      }, 4000); // Cambiar cada 3.5 segundos
    }
  }
}
