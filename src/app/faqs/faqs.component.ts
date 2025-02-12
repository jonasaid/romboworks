// Importación de módulos y librerías necesarios para el funcionamiento del componente
import { Component, OnInit, ViewEncapsulation } from '@angular/core'; // Componentes y funcionalidades básicas de Angular
import { HttpClient } from '@angular/common/http'; // Para realizar peticiones HTTP
import { MatSnackBar } from '@angular/material/snack-bar'; // Para mostrar notificaciones (snackbars)
import * as AOS from 'aos'; // Biblioteca para animaciones al hacer scroll (Animate On Scroll)

// Decorador @Component que define la metadata del componente
@Component({
  selector: 'app-faqs', // Selector utilizado para insertar el componente en el HTML
  templateUrl: './faqs.component.html', // Ruta de la plantilla HTML del componente
  styleUrls: ['./faqs.component.css'],   // Ruta de la hoja de estilos CSS del componente
  encapsulation: ViewEncapsulation.None,  // Desactiva el encapsulamiento de estilos para aplicar estilos globales
})
export class FaqsComponent implements OnInit {
  // Objeto para almacenar los datos del formulario (nombre, correo y mensaje)
  formData = {
    name: '',
    email: '',
    feedback: ''
  };

  // Inyección de dependencias a través del constructor:
  // - HttpClient: para realizar peticiones HTTP.
  // - MatSnackBar: para mostrar notificaciones al usuario.
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Inicializar AOS (Animate On Scroll) para activar animaciones al hacer scroll
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos
      once: true,    // Las animaciones se ejecutan solo una vez por elemento
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
  }

  // Objeto para manejar el estado (abierto o cerrado) de cada pregunta en la sección FAQ.
  // La llave representa el número de la pregunta y el valor es un booleano.
  openQuestions: { [key: number]: boolean } = {};

  /**
   * Método para alternar el estado de visibilidad de una pregunta en la sección de FAQs.
   * @param questionNumber - Número identificador de la pregunta a alternar
   */
  toggleQuestion(questionNumber: number): void {
    // Invierte el estado actual (true/false) de la pregunta con el identificador dado
    this.openQuestions[questionNumber] = !this.openQuestions[questionNumber];
  }

  /**
   * Método para enviar el formulario de contacto.
   * Realiza una validación simple de que todos los campos estén completos, y si es así,
   * envía los datos mediante una petición HTTP POST a la API.
   * Muestra notificaciones al usuario según el resultado de la operación.
   */
  submitForm(): void {
    // Verifica que los campos del formulario (nombre, correo y feedback) tengan contenido
    if (this.formData.name && this.formData.email && this.formData.feedback) {
      // Realiza la petición POST para enviar los datos del formulario a la API
      this.http.post('http://localhost:5000/send-email', this.formData).subscribe(
        // Función de respuesta en caso de éxito
        (response: any) => {
          // Muestra una notificación de éxito al usuario
          this.snackBar.open('Correo enviado exitosamente', 'Cerrar', {
            duration: 5000,             // Duración de la notificación en milisegundos
            panelClass: 'snackbar-success', // Clase CSS personalizada para el estilo de éxito
            horizontalPosition: 'center',   // Posición horizontal de la notificación
            verticalPosition: 'top',        // Posición vertical de la notificación
          });
          // Limpia el formulario reiniciando los campos a sus valores iniciales
          this.formData = { name: '', email: '', feedback: '' };
        },
        // Función de error en caso de que la petición falle
        (error: any) => {
          // Muestra una notificación de error al usuario
          this.snackBar.open('Error al enviar el correo', 'Cerrar', {
            duration: 5000,              // Duración de la notificación
            panelClass: 'snackbar-error', // Clase CSS personalizada para el estilo de error
            horizontalPosition: 'center',   // Posición horizontal de la notificación
            verticalPosition: 'top',        // Posición vertical de la notificación
          });
        }
      );
    } else {
      // Si no se han completado todos los campos del formulario, muestra una advertencia
      this.snackBar.open('Por favor, completa todos los campos', 'Cerrar', {
        duration: 5000,                // Duración de la notificación
        panelClass: 'snackbar-warning', // Clase CSS personalizada para el estilo de advertencia
        horizontalPosition: 'center',     // Posición horizontal de la notificación
        verticalPosition: 'top',          // Posición vertical de la notificación
      });
    }
  }
}
