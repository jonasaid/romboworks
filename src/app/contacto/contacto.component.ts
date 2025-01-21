import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as AOS from 'aos';

@Component({
  selector: 'app-contacto', // Cambiado de 'app-faqs' a 'app-contacto'
  templateUrl: './contacto.component.html', // Cambiado de 'faqs.component.html' a 'contacto.component.html'
  styleUrls: ['./contacto.component.css'], // Cambiado de 'faqs.component.css' a 'contacto.component.css'
  encapsulation: ViewEncapsulation.None,
})
export class ContactoComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    feedback: '',
  };
  cooldownTime = 0; // Tiempo en segundos para el límite
  private cooldownInterval: any;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos
      once: true, // Ejecutar las animaciones solo una vez
      offset: 100, // Distancia desde el viewport para activar las animaciones
    });
  }

  openQuestions: { [key: number]: boolean } = {};

  toggleQuestion(questionNumber: number): void {
    this.openQuestions[questionNumber] = !this.openQuestions[questionNumber];
  }

  submitForm(contactForm: any): void {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !this.formData.name ||
      !this.formData.email ||
      !this.formData.feedback
    ) {
      this.snackBar.open('Por favor, completa todos los campos', 'Cerrar', {
        duration: 5000,
        panelClass: 'snackbar-warning',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    if (!emailPattern.test(this.formData.email)) {
      this.snackBar.open('Por favor ingresa un correo válido', 'Cerrar', {
        duration: 5000,
        panelClass: 'snackbar-warning',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    this.http
      .post('https://api.romboworks.com/send-email', this.formData)
      .subscribe(
        (response: any) => {
          this.snackBar.open('Correo enviado exitosamente', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-success',
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          contactForm.reset(); // Reinicia el formulario completamente (valores y estado)
          this.startCooldown(); // Inicia el temporizador
        },
        (error: any) => {
          this.snackBar.open('Error al enviar el correo', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-error',
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      );
  }
  private startCooldown(): void {
    this.cooldownTime = 30; // Configura el límite de tiempo (en segundos)

    this.cooldownInterval = setInterval(() => {
      this.cooldownTime--;

      if (this.cooldownTime <= 0) {
        clearInterval(this.cooldownInterval);
      }
    }, 1000); // Reduce el tiempo cada segundo
  }
}
