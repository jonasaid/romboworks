import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { Articulo1Component } from './inicio/articulo1/articulo1.component';
import { Articulo2Component } from './inicio/articulo2/articulo2.component';
import { Articulo3Component } from './inicio/articulo3/articulo3.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'articulo1', component: Articulo1Component },
  { path: 'articulo2', component: Articulo2Component },
  { path: 'articulo3', component: Articulo3Component },
  { path: '**', redirectTo: 'inicio' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

