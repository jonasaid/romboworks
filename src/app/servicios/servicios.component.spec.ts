// Importa las utilidades necesarias para realizar pruebas unitarias en Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente que se va a testear.
import { ServiciosComponent } from './servicios.component';

// Describe el conjunto de pruebas para el componente ServiciosComponent.
describe('ServiciosComponent', () => {
  // Declaración de la variable que contendrá la instancia del componente.
  let component: ServiciosComponent;
  // Declaración del fixture, que permite interactuar con el componente y su template durante las pruebas.
  let fixture: ComponentFixture<ServiciosComponent>;

  // beforeEach se ejecuta antes de cada prueba para configurar el entorno de pruebas.
  beforeEach(async () => {
    // Configura el módulo de pruebas declarando el componente que se va a testear.
    await TestBed.configureTestingModule({
      declarations: [ ServiciosComponent ]
    })
    // Compila el template y los estilos del componente.
    .compileComponents();

    // Crea el fixture para el componente ServiciosComponent.
    fixture = TestBed.createComponent(ServiciosComponent);
    // Obtiene la instancia del componente a partir del fixture.
    component = fixture.componentInstance;
    // Ejecuta la detección de cambios para actualizar el DOM con la instancia actual del componente.
    fixture.detectChanges();
  });

  // Prueba unitaria que verifica que el componente se haya creado correctamente.
  it('should create', () => {
    // Se espera que la instancia del componente exista (sea truthy).
    expect(component).toBeTruthy();
  });
});
