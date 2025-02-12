// Importación de los módulos y librerías necesarios para el componente
import { Component, OnInit, ViewEncapsulation } from '@angular/core'; // Decoradores y funcionalidades básicas de Angular
import { HttpClient } from '@angular/common/http'; // Para realizar peticiones HTTP
import { MatSnackBar } from '@angular/material/snack-bar'; // Para mostrar notificaciones (snackbars)
import * as AOS from 'aos'; // Biblioteca para animaciones al hacer scroll

@Component({
  selector: 'app-contacto', // Selector del componente, utilizado en las plantillas HTML
  templateUrl: './contacto.component.html', // Ruta de la plantilla HTML del componente
  styleUrls: ['./contacto.component.css'], // Ruta de la hoja de estilos CSS del componente
  encapsulation: ViewEncapsulation.None, // Desactiva el encapsulamiento de estilos para aplicar estilos globales
})
export class ContactoComponent implements OnInit {
  // Objeto para almacenar los datos del formulario de contacto
  formData = {
    name: '',     // Nombre o empresa del usuario
    email: '',    // Correo electrónico del usuario
    feedback: '', // Mensaje o feedback proporcionado por el usuario
  };

  // Variable para controlar el tiempo de espera (cooldown) después de enviar el formulario
  cooldownTime = 0; // Tiempo en segundos para el límite

  // Variable privada para almacenar el identificador del intervalo del temporizador
  private cooldownInterval: any;

  // Constructor inyecta las dependencias necesarias: HttpClient para peticiones y MatSnackBar para notificaciones
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Inicialización de la librería AOS para animaciones al hacer scroll
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos
      once: true,    // Ejecutar las animaciones solo una vez por elemento
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
  }

  // Objeto para controlar el estado (abierto/cerrado) de cada pregunta en la sección FAQ (preguntas frecuentes)
  openQuestions: { [key: number]: boolean } = {};

  /**
   * Método para alternar el estado de visibilidad de una pregunta en la sección de FAQs.
   * @param questionNumber - Número identificador de la pregunta
   */
  toggleQuestion(questionNumber: number): void {
    // Invierte el estado actual de la pregunta (abierto o cerrado)
    this.openQuestions[questionNumber] = !this.openQuestions[questionNumber];
  }

  /**
   * Método que se ejecuta al enviar el formulario de contacto.
   * Realiza validaciones, envía la información a la API y muestra notificaciones.
   * @param contactForm - Referencia al formulario para poder reiniciarlo posteriormente.
   */
  submitForm(contactForm: any): void {
    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación para asegurar que todos los campos del formulario estén completos
    if (
      !this.formData.name ||
      !this.formData.email ||
      !this.formData.feedback
    ) {
      // Muestra una notificación de advertencia si algún campo está vacío
      this.snackBar.open('Por favor, completa todos los campos', 'Cerrar', {
        duration: 5000,              // Duración de la notificación en milisegundos
        panelClass: 'snackbar-warning', // Clase CSS para estilos de advertencia
        horizontalPosition: 'center',   // Posición horizontal en el viewport
        verticalPosition: 'top',        // Posición vertical en el viewport
      });
      return; // Sale del método sin continuar el envío
    }

    // Validación del formato del correo electrónico utilizando la expresión regular
    if (!emailPattern.test(this.formData.email)) {
      // Muestra una notificación de advertencia si el correo no es válido
      this.snackBar.open('Por favor ingresa un correo válido', 'Cerrar', {
        duration: 5000,
        panelClass: 'snackbar-warning',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return; // Sale del método sin continuar el envío
    }

    // Realiza una petición HTTP POST para enviar los datos del formulario a la API
    this.http
      .post('https://api.romboworks.com/send-email', this.formData)
      .subscribe(
        // Función de éxito: se ejecuta cuando la petición se completa exitosamente
        (response: any) => {
          // Muestra una notificación de éxito al usuario
          this.snackBar.open('Correo enviado exitosamente', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-success',
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          // Reinicia el formulario, limpiando los valores y el estado de validación
          contactForm.reset();
          // Inicia el temporizador de cooldown para prevenir envíos múltiples inmediatos
          this.startCooldown();
        },
        // Función de error: se ejecuta si ocurre un problema al enviar la petición
        (error: any) => {
          // Muestra una notificación de error al usuario
          this.snackBar.open('Error al enviar el correo', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-error',
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      );
  }

  /**
   * Método privado para iniciar un temporizador (cooldown) de 30 segundos.
   * Durante este tiempo, se deshabilitan ciertas acciones (por ejemplo, el envío del formulario).
   */
  private startCooldown(): void {
    this.cooldownTime = 30; // Configura el límite de tiempo en 30 segundos

    // Inicia un intervalo que decrementa la variable cooldownTime cada segundo
    this.cooldownInterval = setInterval(() => {
      this.cooldownTime--;

      // Cuando el cooldown llega a cero, se limpia el intervalo para detener el conteo
      if (this.cooldownTime <= 0) {
        clearInterval(this.cooldownInterval);
      }
    }, 1000); // Ejecuta la función cada 1000 milisegundos (1 segundo)
  }
}
