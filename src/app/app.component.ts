import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showToolbar = true;

  constructor(private router: Router) {}

  irInicio() {
    this.router.navigate(['/inicio']);
  }

  irServices() {
    this.router.navigate(['/servicios']);
  }

  irFAQs() {
    this.router.navigate(['/faqs']);
  }

  irAboutUs() {
    this.router.navigate(['/sobre-nosotros']);
  }
}
