// Importa las utilidades necesarias para realizar pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente que se va a testear
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  // Declaración de la variable que contendrá la instancia del componente
  let component: InicioComponent;
  // Declaración del fixture, que permite acceder y manipular la instancia del componente y su template
  let fixture: ComponentFixture<InicioComponent>;

  // beforeEach se ejecuta antes de cada prueba para configurar el entorno de pruebas
  beforeEach(async () => {
    // Configura el módulo de pruebas declarando el componente que se va a testear
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ]
    })
    // Compila el template y los estilos del componente
    .compileComponents();

    // Crea una instancia del fixture para el componente InicioComponent
    fixture = TestBed.createComponent(InicioComponent);
    // Asigna la instancia del componente a la variable 'component'
    component = fixture.componentInstance;
    // Ejecuta la detección de cambios para actualizar el template con la instancia del componente
    fixture.detectChanges();
  });

  // Prueba unitaria que verifica que el componente se haya creado correctamente
  it('should create', () => {
    // Se espera que la instancia del componente exista (sea truthy)
    expect(component).toBeTruthy();
  });
});
