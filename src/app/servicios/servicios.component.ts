import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  constructor(private router: Router) {}

  irAboutUs() {
    this.router.navigate(['/sobre-nosotros']);
  }
}
