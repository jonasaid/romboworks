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
    feedback: ''
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 800, // Duración de las animaciones en milisegundos
      once: true,    // Ejecutar las animaciones solo una vez
      offset: 100,   // Distancia desde el viewport para activar las animaciones
    });
  }

  openQuestions: { [key: number]: boolean } = {};

  toggleQuestion(questionNumber: number): void {
    this.openQuestions[questionNumber] = !this.openQuestions[questionNumber];
  }

  submitForm(): void {
    if (this.formData.name && this.formData.email && this.formData.feedback) {
      this.http.post('https://api.romboworks.com/send-email', this.formData).subscribe(
        (response: any) => {
          this.snackBar.open('Correo enviado exitosamente', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-success',
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.formData = { name: '', email: '', feedback: '' }; // Limpiar formulario
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
    } else {
      this.snackBar.open('Por favor, completa todos los campos', 'Cerrar', {
        duration: 5000,
        panelClass: 'snackbar-warning',
        horizontalPosition: 'center',
        verticalPosition: 'top',

      });
    }
  }
}