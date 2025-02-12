// Importa las utilidades necesarias para las pruebas unitarias de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente que se va a probar
import { ContactoComponent } from './contacto.component';

// Bloque describe que contiene todas las pruebas para ContactoComponent
describe('ContactoComponent', () => {
  // Declaración de variables que se utilizarán en las pruebas

  // Variable para almacenar la instancia del componente
  let component: ContactoComponent;
  // Variable para almacenar el fixture, que permite interactuar con el DOM del componente durante las pruebas
  let fixture: ComponentFixture<ContactoComponent>;

  // beforeEach se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas con los componentes que se van a declarar
    await TestBed.configureTestingModule({
      // Declara el componente a testear
      declarations: [ ContactoComponent ]
    })
    // Compila los componentes declarados en el módulo de pruebas
    .compileComponents();

    // Crea una instancia del fixture para el componente ContactoComponent
    fixture = TestBed.createComponent(ContactoComponent);
    // Obtiene la instancia del componente desde el fixture
    component = fixture.componentInstance;
    // Ejecuta la detección de cambios para actualizar el DOM con la instancia actual del componente
    fixture.detectChanges();
  });

  // Prueba unitaria que verifica si el componente se crea correctamente
  it('should create', () => {
    // Comprueba que la instancia del componente sea verdadera (exista)
    expect(component).toBeTruthy();
  });
});
