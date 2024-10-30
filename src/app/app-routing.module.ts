import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
