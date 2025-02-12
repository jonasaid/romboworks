// Importa la función enableProdMode desde Angular core para habilitar el modo de producción,
// lo cual desactiva las comprobaciones adicionales y mejora el rendimiento.
import { enableProdMode } from '@angular/core';

// Importa la función platformBrowserDynamic, que se utiliza para arrancar la aplicación en el navegador.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importa el módulo raíz de la aplicación.
import { AppModule } from './app/app.module';

// Importa la configuración del entorno (por ejemplo, si está en modo producción o desarrollo).
import { environment } from './environments/environment';

// Si el entorno indica que la aplicación se está ejecutando en producción,
// habilita el modo de producción en Angular para optimizar el rendimiento.
if (environment.production) {
  enableProdMode();
}

// Arranca (bootstrap) el módulo raíz de la aplicación usando platformBrowserDynamic.
// Si ocurre algún error durante el proceso de arranque, se captura y se muestra en la consola.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
