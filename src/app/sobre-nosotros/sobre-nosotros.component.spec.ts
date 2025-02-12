// Importa las utilidades necesarias para realizar pruebas unitarias en Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente que se va a probar.
import { SobreNosotrosComponent } from './sobre-nosotros.component';

// Describe el grupo de pruebas para el componente SobreNosotrosComponent.
describe('SobreNosotrosComponent', () => {
  // Declara la variable que contendrá la instancia del componente.
  let component: SobreNosotrosComponent;
  // Declara la variable del fixture, que es una envoltura para el componente y su template.
  let fixture: ComponentFixture<SobreNosotrosComponent>;

  // beforeEach se ejecuta antes de cada prueba para configurar el entorno de pruebas.
  beforeEach(async () => {
    // Configura el módulo de pruebas, declarando el componente que se va a testear.
    await TestBed.configureTestingModule({
      declarations: [ SobreNosotrosComponent ]
    })
    // Compila el template y los estilos del componente.
    .compileComponents();

    // Crea el fixture para el componente SobreNosotrosComponent.
    fixture = TestBed.createComponent(SobreNosotrosComponent);
    // Obtiene la instancia del componente a partir del fixture.
    component = fixture.componentInstance;
    // Ejecuta la detección de cambios para actualizar el DOM con los datos del componente.
    fixture.detectChanges();
  });

  // Prueba unitaria que verifica que el componente se haya creado correctamente.
  it('should create', () => {
    // Se espera que la instancia del componente sea verdadera (exista).
    expect(component).toBeTruthy();
  });
});
