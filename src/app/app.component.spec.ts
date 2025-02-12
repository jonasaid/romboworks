// Importa TestBed para configurar y crear un entorno de pruebas en Angular.
import { TestBed } from '@angular/core/testing';
// Importa RouterTestingModule para simular el enrutamiento en las pruebas.
import { RouterTestingModule } from '@angular/router/testing';
// Importa el componente principal de la aplicación que se va a probar.
import { AppComponent } from './app.component';

// Describe el conjunto de pruebas para el componente AppComponent.
describe('AppComponent', () => {
  // beforeEach se ejecuta antes de cada prueba para configurar el módulo de pruebas.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa RouterTestingModule para simular el enrutamiento durante las pruebas.
      imports: [
        RouterTestingModule
      ],
      // Declara los componentes que se utilizarán en el módulo de pruebas.
      declarations: [
        AppComponent
      ],
    })
    // Compila los componentes declarados para que estén listos para ser testeados.
    .compileComponents();
  });

  // Prueba para verificar que la aplicación se crea correctamente.
  it('should create the app', () => {
    // Crea una instancia del componente AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    // Obtiene la instancia del componente desde el fixture.
    const app = fixture.componentInstance;
    // Verifica que la instancia del componente exista (es truthy).
    expect(app).toBeTruthy();
  });

  // Prueba para verificar que la propiedad 'title' del componente tenga el valor 'romboworks'.
  it(`should have as title 'romboworks'`, () => {
    // Crea una instancia del componente AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    // Obtiene la instancia del componente.
    const app = fixture.componentInstance;
    // Comprueba que la propiedad 'title' sea igual a 'romboworks'.
    expect(app.title).toEqual('romboworks');
  });

  // Prueba para verificar que el título se renderice en el DOM.
  it('should render title', () => {
    // Crea una instancia del componente AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    // Ejecuta la detección de cambios para actualizar el DOM.
    fixture.detectChanges();
    // Obtiene el elemento nativo (DOM) renderizado por el componente.
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica que el texto contenido en el elemento con la clase 'content span'
    // contenga la cadena 'romboworks app is running!'.
    expect(compiled.querySelector('.content span')?.textContent).toContain('romboworks app is running!');
  });
});
