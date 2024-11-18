import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FaqsComponent {
  formData = {
    name: '',
    email: '',
    feedback: ''
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.feedback) {
      this.http.post('http://localhost:5000/send-email', this.formData).subscribe(
        (response: any) => {
          this.snackBar.open('Correo enviado exitosamente', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-success', // Clase personalizada
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.formData = { name: '', email: '', feedback: '' };
        },
        (error: any) => {
          this.snackBar.open('Error al enviar el correo', 'Cerrar', {
            duration: 5000,
            panelClass: 'snackbar-error', // Clase personalizada
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      );
    } else {
      this.snackBar.open('Por favor, completa todos los campos', 'Cerrar', {
        duration: 5000,
        panelClass: 'snackbar-warning', // Clase personalizada
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }
}
