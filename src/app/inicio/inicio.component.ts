import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// Registrar los módulos necesarios
Swiper.use([Navigation, Pagination, Autoplay]);

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
    new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Configuración por defecto (pantallas muy grandes, si quieres)
      slidesPerView: 3,
      slidesPerGroup: 3,
  
      // Breakpoints que adaptan tanto slidesPerView como slidesPerGroup
      breakpoints: {
        // A partir de 0px → 1 tarjeta y cambia de 1 en 1
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        // A partir de 480px → 2 tarjetas y cambia de 2 en 2
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // A partir de 768px → 3 tarjetas y cambia de 3 en 3
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  
    // Resto de tu código...
    this.initBackgroundCarousel();
    this.initTextCarousel();
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
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
      // Precarga de imágenes
      const preloadImage = (url: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
        });
      };

      const changeBackgroundImage = async () => {
        // Fade Out
        this.renderer.addClass(heroSection, 'fade-out');

        // Esperar a la precarga
        await preloadImage(images[currentImageIndex]);

        // Cambia la imagen de fondo
        this.renderer.setStyle(
          heroSection,
          'backgroundImage',
          `url(${images[currentImageIndex]})`
        );

        // Fade In
        setTimeout(() => {
          this.renderer.removeClass(heroSection, 'fade-out');
          this.renderer.addClass(heroSection, 'fade-in');

          // Remover fade-in después de la transición
          setTimeout(() => {
            this.renderer.removeClass(heroSection, 'fade-in');
          }, 1000);
        }, 100);
      };

      // Configuración inicial
      this.renderer.setStyle(
        heroSection,
        'backgroundImage',
        `url(${images[currentImageIndex]})`
      );

      // Intervalo de cambio
      setInterval(async () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        await changeBackgroundImage();
      }, 4000);
    }
  }

  private initTextCarousel() {
    const dynamicTextElement = document.getElementById('dynamic-text');

    if (dynamicTextElement) {
      setInterval(() => {
        // Fade out
        this.renderer.setStyle(dynamicTextElement, 'opacity', '0');

        setTimeout(() => {
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;

          // Cambiar texto
          this.renderer.setProperty(dynamicTextElement, 'textContent', this.texts[this.currentTextIndex]);

          // Fade in
          this.renderer.setStyle(dynamicTextElement, 'opacity', '1');
        }, 500);
      }, 4000);
    }
  }
}
