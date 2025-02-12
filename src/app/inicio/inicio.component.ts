import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// Registrar los módulos necesarios para Swiper: navegación, paginación y autoplay
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-inicio', // Selector del componente
  templateUrl: './inicio.component.html', // Ruta del template HTML
  styleUrls: ['./inicio.component.css'] // Ruta del archivo de estilos CSS
})
export class InicioComponent implements OnInit {
  // Array de textos para el carrusel dinámico en la sección hero
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

  // Array de rutas de imágenes para el carrusel de fondo de la sección hero
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

  // Índice actual para el carrusel de textos
  private currentTextIndex: number = 0;
  // Índice actual para el carrusel de imágenes (este valor no se utiliza directamente en este método)
  private currentImageIndex: number = 0;

  // Inyección de dependencias:
  // - Router: para la navegación entre rutas
  // - Renderer2: para manipular el DOM de forma segura en Angular
  constructor(private router: Router, private renderer: Renderer2) {}

  // Método de inicialización del componente
  ngOnInit() {
    // Inicializar Swiper para el slider con configuración personalizada
    new Swiper('.swiper-container', {
      loop: true, // Habilita el loop infinito de slides
      spaceBetween: 30, // Espacio en píxeles entre cada slide
      autoplay: {
        delay: 5000, // Tiempo de espera (ms) antes de pasar al siguiente slide
        disableOnInteraction: false, // Continúa el autoplay después de la interacción del usuario
      },
      navigation: {
        nextEl: '.swiper-button-next', // Selector para el botón de siguiente slide
        prevEl: '.swiper-button-prev', // Selector para el botón de slide anterior
      },
      pagination: {
        el: '.swiper-pagination', // Selector para la paginación
        clickable: true, // Permite hacer clic en la paginación para cambiar de slide
      },
      // Configuración predeterminada para pantallas grandes
      slidesPerView: 3,
      slidesPerGroup: 3,
  
      // Breakpoints para adaptar el número de slides según el ancho de la pantalla
      breakpoints: {
        // Desde 0px: 1 slide a la vez y se mueve de 1 en 1
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        // Desde 480px: 2 slides a la vez y se mueve de 2 en 2
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // Desde 768px: 3 slides a la vez y se mueve de 3 en 3
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  
    // Inicializar el carrusel de fondo y el carrusel de textos
    this.initBackgroundCarousel();
    this.initTextCarousel();

    // Inicializar AOS (Animate On Scroll) para animaciones al hacer scroll
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos
      once: true,    // Las animaciones se ejecutan solo una vez
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
  }
  
  // Método para navegar a la página "Sobre Nosotros"
  irAboutUs() {
    this.router.navigate(['/sobre-nosotros']);
  }

  // Método para navegar a la página de "Servicios"
  irServices() {
    this.router.navigate(['/servicios']);
  }

  // Método privado para inicializar el carrusel de fondo en la sección hero
  private initBackgroundCarousel() {
    // Array de imágenes para el carrusel de fondo (duplicado del array de imágenes)
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
    // Variable local para rastrear el índice actual de la imagen
    let currentImageIndex = 0;

    // Seleccionar el elemento de la sección hero que servirá de fondo
    const heroSection = document.querySelector('.hero-section') as HTMLElement;

    if (heroSection) {
      // Función para precargar una imagen y retornar una promesa que se resuelve cuando la imagen se carga
      const preloadImage = (url: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
        });
      };

      // Función asíncrona para cambiar la imagen de fondo con efectos de fade-out y fade-in
      const changeBackgroundImage = async () => {
        // Aplicar la clase 'fade-out' para iniciar el efecto de desvanecimiento
        this.renderer.addClass(heroSection, 'fade-out');

        // Esperar a que la imagen actual se precargue
        await preloadImage(images[currentImageIndex]);

        // Cambiar la imagen de fondo del elemento heroSection
        this.renderer.setStyle(
          heroSection,
          'backgroundImage',
          `url(${images[currentImageIndex]})`
        );

        // Iniciar el efecto de fade-in después de un breve retraso
        setTimeout(() => {
          // Remover la clase 'fade-out' y agregar 'fade-in' para el efecto de aparición
          this.renderer.removeClass(heroSection, 'fade-out');
          this.renderer.addClass(heroSection, 'fade-in');

          // Después de 1 segundo, remover la clase 'fade-in' para limpiar el estado del elemento
          setTimeout(() => {
            this.renderer.removeClass(heroSection, 'fade-in');
          }, 1000);
        }, 100);
      };

      // Configuración inicial: establecer la primera imagen de fondo
      this.renderer.setStyle(
        heroSection,
        'backgroundImage',
        `url(${images[currentImageIndex]})`
      );

      // Establecer un intervalo para cambiar la imagen de fondo cada 4000 milisegundos (4 segundos)
      setInterval(async () => {
        // Actualizar el índice de la imagen de forma cíclica
        currentImageIndex = (currentImageIndex + 1) % images.length;
        // Cambiar la imagen de fondo con efecto
        await changeBackgroundImage();
      }, 4000);
    }
  }

  // Método privado para inicializar el carrusel de textos dinámicos
  private initTextCarousel() {
    // Seleccionar el elemento del DOM que contiene el texto dinámico (por su id)
    const dynamicTextElement = document.getElementById('dynamic-text');

    if (dynamicTextElement) {
      // Establecer un intervalo para cambiar el texto cada 4000 milisegundos (4 segundos)
      setInterval(() => {
        // Iniciar el efecto de fade-out estableciendo la opacidad a 0
        this.renderer.setStyle(dynamicTextElement, 'opacity', '0');

        // Después de 500 milisegundos, cambiar el texto y aplicar el efecto de fade-in
        setTimeout(() => {
          // Actualizar el índice del texto de forma cíclica
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;

          // Cambiar el contenido de texto del elemento con el siguiente mensaje
          this.renderer.setProperty(dynamicTextElement, 'textContent', this.texts[this.currentTextIndex]);

          // Aplicar el efecto de fade-in volviendo la opacidad a 1
          this.renderer.setStyle(dynamicTextElement, 'opacity', '1');
        }, 500);
      }, 4000);
    }
  }
}
